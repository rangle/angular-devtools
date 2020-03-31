import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import * as treemap from 'webtreemap/build/webtreemap';
import { TreeMapNode } from '../../record-formatter/tree-map-formatter';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'ng-tree-map-visualizer',
  templateUrl: './tree-map-visualizer.component.html',
  styleUrls: ['./tree-map-visualizer.component.scss'],
})
export class TreeMapVisualizerComponent implements AfterViewInit, OnInit {
  @Input() set records(data: TreeMapNode[]) {
    // first element in data is the Application node
    this.treeMapRecords = data[0];
    if (this.tree) {
      this.updateTree();
    }
  }

  private changeSize = new Subject<void>();

  treeMapRecords: TreeMapNode;

  @ViewChild('webTree') tree: ElementRef;

  ngAfterViewInit(): void {
    this.updateTree();
  }

  ngOnInit(): void {
    this.changeSize
      .asObservable()
      .pipe(throttleTime(100))
      .subscribe((_) => this.handleResize());
  }

  updateTree(): void {
    this.removeTree();
    this.createTree();
  }

  createTree(): void {
    treemap.render(this.tree.nativeElement, this.treeMapRecords as any, {
      padding: [20, 5, 5, 5],
      caption: (node) => `${node.id}: ${node.size.toFixed(3)} ms`,
      showNode: () => true,
    });
  }

  removeTree(): void {
    Array.from(this.tree.nativeElement.children).forEach((child: HTMLElement) => child.remove());
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.changeSize.next();
  }

  handleResize(): void {
    this.updateTree();
  }
}