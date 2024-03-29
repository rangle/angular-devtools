import { unHighlight, highlight, findComponentAndHost } from '../highlighter';
import { findNodeInForest } from '../component-tree';
import { initializeOrGetDirectiveForestHooks } from '../hooks';
export class ComponentInspector {
    constructor(componentOptions = {
        onComponentEnter: () => { },
        onComponentLeave: () => { },
        onComponentSelect: () => { },
    }) {
        this.bindMethods();
        this._onComponentEnter = componentOptions.onComponentEnter;
        this._onComponentSelect = componentOptions.onComponentSelect;
        this._onComponentLeave = componentOptions.onComponentLeave;
    }
    startInspecting() {
        window.addEventListener('mouseover', this.elementMouseOver, true);
        window.addEventListener('click', this.elementClick, true);
        window.addEventListener('mouseout', this.cancelEvent, true);
    }
    stopInspecting() {
        window.removeEventListener('mouseover', this.elementMouseOver, true);
        window.removeEventListener('click', this.elementClick, true);
        window.removeEventListener('mouseout', this.cancelEvent, true);
    }
    elementClick(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (this._selectedComponent.component && this._selectedComponent.host) {
            this._onComponentSelect(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
        }
    }
    elementMouseOver(e) {
        this.cancelEvent(e);
        const el = e.target;
        if (el) {
            this._selectedComponent = findComponentAndHost(el);
        }
        unHighlight();
        if (this._selectedComponent.component && this._selectedComponent.host) {
            highlight(this._selectedComponent.host);
            this._onComponentEnter(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
        }
    }
    cancelEvent(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        this._onComponentLeave();
    }
    bindMethods() {
        this.startInspecting = this.startInspecting.bind(this);
        this.stopInspecting = this.stopInspecting.bind(this);
        this.elementMouseOver = this.elementMouseOver.bind(this);
        this.elementClick = this.elementClick.bind(this);
        this.cancelEvent = this.cancelEvent.bind(this);
    }
    highlightByPosition(position) {
        const forest = initializeOrGetDirectiveForestHooks().getDirectiveForest();
        const elementToHighlight = findNodeInForest(position, forest);
        if (elementToHighlight) {
            highlight(elementToHighlight);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWluc3BlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzLWJhY2tlbmQvc3JjL2xpYi9jb21wb25lbnQtaW5zcGVjdG9yL2NvbXBvbmVudC1pbnNwZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RSxPQUFPLEVBQXFCLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBUS9ELE1BQU0sT0FBTyxrQkFBa0I7SUFNN0IsWUFDRSxtQkFBOEM7UUFDNUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQztRQUMxQixnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO1FBQzFCLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUM7S0FDNUI7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7SUFDN0QsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJ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dCB9IGZyb20gJy4uL2hpZ2hsaWdodGVyJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFRyZWVOb2RlLCBmaW5kTm9kZUluRm9yZXN0IH0gZnJvbSAnLi4vY29tcG9uZW50LXRyZWUnO1xuaW1wb3J0IHsgRWxlbWVudFBvc2l0aW9uIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZU9yR2V0RGlyZWN0aXZlRm9yZXN0SG9va3MgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50SW5zcGVjdG9yT3B0aW9ucyB7XG4gIG9uQ29tcG9uZW50RW50ZXI6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkNvbXBvbmVudFNlbGVjdDogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uQ29tcG9uZW50TGVhdmU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRJbnNwZWN0b3Ige1xuICBwcml2YXRlIF9zZWxlY3RlZENvbXBvbmVudDogeyBjb21wb25lbnQ6IFR5cGU8dW5rbm93bj47IGhvc3Q6IEhUTUxFbGVtZW50IHwgbnVsbCB9O1xuICBwcml2YXRlIHJlYWRvbmx5IF9vbkNvbXBvbmVudEVudGVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9vbkNvbXBvbmVudFNlbGVjdDtcbiAgcHJpdmF0ZSByZWFkb25seSBfb25Db21wb25lbnRMZWF2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb21wb25lbnRPcHRpb25zOiBDb21wb25lbnRJbnNwZWN0b3JPcHRpb25zID0ge1xuICAgICAgb25Db21wb25lbnRFbnRlcjogKCkgPT4ge30sXG4gICAgICBvbkNvbXBvbmVudExlYXZlOiAoKSA9PiB7fSxcbiAgICAgIG9uQ29tcG9uZW50U2VsZWN0OiAoKSA9PiB7fSxcbiAgICB9XG4gICkge1xuICAgIHRoaXMuYmluZE1ldGhvZHMoKTtcbiAgICB0aGlzLl9vbkNvbXBvbmVudEVudGVyID0gY29tcG9uZW50T3B0aW9ucy5vbkNvbXBvbmVudEVudGVyO1xuICAgIHRoaXMuX29uQ29tcG9uZW50U2VsZWN0ID0gY29tcG9uZW50T3B0aW9ucy5vbkNvbXBvbmVudFNlbGVjdDtcbiAgICB0aGlzLl9vbkNvbXBvbmVudExlYXZlID0gY29tcG9uZW50T3B0aW9ucy5vbkNvbXBvbmVudExlYXZlO1xuICB9XG5cbiAgc3RhcnRJbnNwZWN0aW5nKCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLmVsZW1lbnRNb3VzZU92ZXIsIHRydWUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWxlbWVudENsaWNrLCB0cnVlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmNhbmNlbEV2ZW50LCB0cnVlKTtcbiAgfVxuXG4gIHN0b3BJbnNwZWN0aW5nKCk6IHZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLmVsZW1lbnRNb3VzZU92ZXIsIHRydWUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWxlbWVudENsaWNrLCB0cnVlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmNhbmNlbEV2ZW50LCB0cnVlKTtcbiAgfVxuXG4gIGVsZW1lbnRDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRDb21wb25lbnQuY29tcG9uZW50ICYmIHRoaXMuX3NlbGVjdGVkQ29tcG9uZW50Lmhvc3QpIHtcbiAgICAgIHRoaXMuX29uQ29tcG9uZW50U2VsZWN0KGluaXRpYWxpemVPckdldERpcmVjdGl2ZUZvcmVzdEhvb2tzKCkuZ2V0RGlyZWN0aXZlSWQodGhpcy5fc2VsZWN0ZWRDb21wb25lbnQuY29tcG9uZW50KSk7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudE1vdXNlT3ZlcihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxFdmVudChlKTtcblxuICAgIGNvbnN0IGVsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGVsKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZENvbXBvbmVudCA9IGZpbmRDb21wb25lbnRBbmRIb3N0KGVsKTtcbiAgICB9XG5cbiAgICB1bkhpZ2hsaWdodCgpO1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZENvbXBvbmVudC5jb21wb25lbnQgJiYgdGhpcy5fc2VsZWN0ZWRDb21wb25lbnQuaG9zdCkge1xuICAgICAgaGlnaGxpZ2h0KHRoaXMuX3NlbGVjdGVkQ29tcG9uZW50Lmhvc3QpO1xuICAgICAgdGhpcy5fb25Db21wb25lbnRFbnRlcihpbml0aWFsaXplT3JHZXREaXJlY3RpdmVGb3Jlc3RIb29rcygpLmdldERpcmVjdGl2ZUlkKHRoaXMuX3NlbGVjdGVkQ29tcG9uZW50LmNvbXBvbmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbEV2ZW50KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9vbkNvbXBvbmVudExlYXZlKCk7XG4gIH1cblxuICBiaW5kTWV0aG9kcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0SW5zcGVjdGluZyA9IHRoaXMuc3RhcnRJbnNwZWN0aW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wSW5zcGVjdGluZyA9IHRoaXMuc3RvcEluc3BlY3RpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnRNb3VzZU92ZXIgPSB0aGlzLmVsZW1lbnRNb3VzZU92ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnRDbGljayA9IHRoaXMuZWxlbWVudENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYW5jZWxFdmVudCA9IHRoaXMuY2FuY2VsRXZlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhpZ2hsaWdodEJ5UG9zaXRpb24ocG9zaXRpb246IEVsZW1lbnRQb3NpdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGZvcmVzdDogQ29tcG9uZW50VHJlZU5vZGVbXSA9IGluaXRpYWxpemVPckdldERpcmVjdGl2ZUZvcmVzdEhvb2tzKCkuZ2V0RGlyZWN0aXZlRm9yZXN0KCk7XG4gICAgY29uc3QgZWxlbWVudFRvSGlnaGxpZ2h0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBmaW5kTm9kZUluRm9yZXN0KHBvc2l0aW9uLCBmb3Jlc3QpO1xuICAgIGlmIChlbGVtZW50VG9IaWdobGlnaHQpIHtcbiAgICAgIGhpZ2hsaWdodChlbGVtZW50VG9IaWdobGlnaHQpO1xuICAgIH1cbiAgfVxufVxuIl19