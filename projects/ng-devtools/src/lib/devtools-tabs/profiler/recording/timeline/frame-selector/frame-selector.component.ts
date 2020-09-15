import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { GraphNode } from '../record-formatter/record-formatter';
import { Observable, Subscription } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { TabUpdate } from '../../../../tab-update';

const ITEM_WIDTH = 29;

@Component({
  selector: 'ng-frame-selector',
  templateUrl: './frame-selector.component.html',
  styleUrls: ['./frame-selector.component.scss'],
})
export class FrameSelectorComponent implements OnInit, OnDestroy {
  @ViewChild('barContainer') barContainer: ElementRef;
  @Input() set startFrame(value: number) {
    this.startFrameIndex = value;
    this._ensureVisible(value);
  }
  @Input() set endFrame(value: number) {
    this.endFrameIndex = value;
  }
  @Input() set graphData$(graphData: Observable<GraphNode[]>) {
    this._graphData$ = graphData;
    this._graphDataSubscription = this._graphData$.subscribe((items) =>
      setTimeout(() => {
        this.viewport.scrollToIndex(items.length);
      })
    );
  }

  get graphData$(): Observable<GraphNode[]> {
    return this._graphData$;
  }

  @Output() move = new EventEmitter<number>();
  @Output() selectFrames = new EventEmitter<{ indexes: Set<number> }>();

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  startFrameIndex: number;
  endFrameIndex: number;
  selectedFrameIndexes = new Set<number>();
  pivotIndex: number;

  get itemWidth(): number {
    return ITEM_WIDTH;
  }

  private _graphData$: Observable<GraphNode[]>;
  private _graphDataSubscription: Subscription;
  private _tabUpdateSubscription: Subscription;

  constructor(private _tabUpdate: TabUpdate) {}

  ngOnInit(): void {
    this._tabUpdateSubscription = this._tabUpdate.tabUpdate$.subscribe(() => {
      if (this.viewport) {
        setTimeout(() => {
          this.viewport.scrollToIndex(0);
          this.viewport.checkViewportSize();
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this._tabUpdateSubscription) {
      this._tabUpdateSubscription.unsubscribe();
    }
    if (this._graphDataSubscription) {
      this._graphDataSubscription.unsubscribe();
    }
  }

  get selectionLabel(): string {
    if (this.startFrameIndex === this.endFrameIndex) {
      return `${this.startFrameIndex + 1}`;
    }

    return this._smartJoinIndexLabels([...this.selectedFrameIndexes]);
  }

  private _smartJoinIndexLabels(indexArray: number[]): string {
    const sortedIndexes = indexArray.sort((a, b) => a - b);

    const groups: number[][] = [];
    let prev: number | null = null;

    for (const index of sortedIndexes) {
      // First iteration: create initial group and set prev variable to the first index
      if (prev === null) {
        groups.push([index]);
        prev = index;
        continue;
      }

      // If current index is consecutive with the previous, group them, otherwise start a new group
      if (prev + 1 === index) {
        groups[groups.length - 1].push(index);
      } else {
        groups.push([index]);
      }

      prev = index;
    }

    return groups
      .filter((group) => group.length > 0)
      .map((group) => (group.length === 1 ? group[0] + 1 : `${group[0] + 1}-${group[group.length - 1] + 1}`))
      .join(', ');
  }

  next(): void {
    this.pivotIndex = this.startFrameIndex + 1;
    this.selectedFrameIndexes = new Set([this.pivotIndex]);
    this.move.emit(1);
  }

  prev(): void {
    this.pivotIndex = this.startFrameIndex - 1;
    this.selectedFrameIndexes = new Set([this.pivotIndex]);
    this.move.emit(-1);
  }

  handleFrameSelection(idx: number, event: MouseEvent): void {
    const { shiftKey, ctrlKey, metaKey } = event;

    if (shiftKey) {
      const [start, end] = [Math.min(this.pivotIndex, idx), Math.max(this.pivotIndex, idx)];
      this.selectedFrameIndexes = new Set([...Array(end - start + 1).keys()].map((i) => i + start));
    } else if (ctrlKey || metaKey) {
      if (this.selectedFrameIndexes.has(idx)) {
        if (this.selectedFrameIndexes.size === 1) {
          return; // prevent deselection when only one frame is selected
        }

        this.selectedFrameIndexes.delete(idx);

        if (this.pivotIndex === idx) {
          // case where pivot index was removed, pivot must be reassigned
          const sortedIndexArray = [...this.selectedFrameIndexes].sort((a, b) => a - b);
          const [start, end] = [sortedIndexArray[0], sortedIndexArray[sortedIndexArray.length - 1]];
          this.pivotIndex = idx < start ? start : end;
        }
      } else {
        this.selectedFrameIndexes.add(idx);
        this.pivotIndex = idx;
      }
    } else {
      this.selectedFrameIndexes = new Set([idx]);
      this.pivotIndex = idx;
    }

    this.selectFrames.emit({ indexes: this.selectedFrameIndexes });
  }

  private _ensureVisible(index: number): void {
    if (!this.viewport) {
      return;
    }
    const scrollParent = this.viewport.elementRef.nativeElement;
    // The left most point we see an element
    const left = scrollParent.scrollLeft;
    // That's the right most point we currently see an element.
    const right = left + scrollParent.offsetWidth;
    const itemLeft = index * this.itemWidth;
    if (itemLeft < left) {
      scrollParent.scrollTo({ left: itemLeft });
    } else if (right < itemLeft + this.itemWidth) {
      scrollParent.scrollTo({ left: itemLeft - scrollParent.offsetWidth + this.itemWidth });
    }
  }
}
