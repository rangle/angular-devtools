import { Component, ViewChild, Input } from '@angular/core';
import * as d3 from 'd3';
import * as i0 from "@angular/core";
import * as i1 from "protocol";
const _c0 = ["svgContainer"];
const _c1 = ["mainGroup"];
export class RouterTreeComponent {
    constructor(_messageBus) {
        this._messageBus = _messageBus;
        this._routes = [];
    }
    set routes(routes) {
        this._routes = routes;
        this.render();
    }
    ngAfterViewInit() {
        this._messageBus.emit('getRoutes');
    }
    render() {
        var _a, _b;
        if (this._routes.length === 0 || !this.g) {
            return;
        }
        // cleanup old render
        (_b = (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a);
        d3.select(this.g.nativeElement).selectAll('*').remove();
        this.tree = d3.tree();
        const svg = d3.select(this.svgContainer.nativeElement);
        svg.attr('height', 500).attr('width', 500);
        const g = d3.select(this.g.nativeElement);
        const svgPadding = 20;
        // Compute the new tree layout.
        this.tree.nodeSize([75, 200]);
        const root = this._routes[0];
        const nodes = this.tree(d3.hierarchy(root.children.length === 0 || root.children.length > 1 ? root : root.children[0], (d) => d.children));
        // Define the div for the tooltip
        this.tooltip = d3.select('body').append('div').attr('class', 'tooltip').style('opacity', 0).style('padding', '0');
        g.selectAll('.link')
            .data(nodes.descendants().slice(1))
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('d', (d) => `
            M${d.y},${d.x}
            C${(d.y + d.parent.y) / 2},
              ${d.x} ${(d.y + d.parent.y) / 2},
              ${d.parent.x} ${d.parent.y},
              ${d.parent.x}`);
        // Declare the nodes
        const node = g
            .selectAll('g.node')
            .data(nodes.descendants())
            .enter()
            .append('g')
            .attr('class', 'node')
            .on('mouseover', (n) => {
            const content = `
          <b>Name:</b> ${n.data.name}<br/>
          <b>Path:</b> ${n.data.path}<br/>
          <b>Auxiliary Route:</b> ${n.data.isAux}<br/>
          <b>Specificity:</b> ${n.data.specificity}<br/>
          <b>Handler:</b> ${n.data.handler}<br/>
        `;
            this.tooltip.style('padding', '4px 8px').transition().style('opacity', 0.9);
            this.tooltip
                .html(content)
                .style('left', d3.event.pageX + 8 + 'px')
                .style('top', d3.event.pageY + 8 + 'px');
        })
            .on('mouseout', () => this.tooltip.transition().style('opacity', 0))
            .attr('transform', (d) => `translate(${d.y},${d.x})`);
        node
            .append('circle')
            .attr('class', (d) => (d.data.isAux ? 'node-aux-route' : 'node-route'))
            .attr('r', 6);
        node
            .append('text')
            .attr('dy', (d) => (d.depth === 0 || !d.children ? '0.35em' : '-1.50em'))
            .attr('dx', (d) => {
            if (d.parent && d.children) {
                return 6;
            }
            else if (!d.parent && d.children) {
                return -13;
            }
            else if (d.parent && !d.children) {
                return 13;
            }
        })
            .attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
            .text((d) => {
            const label = d.data.name;
            return label.length > 20 ? label.slice(0, 17) + '...' : label;
        });
        // reset transform
        g.attr('transform', 'translate(0, 0)');
        const svgRect = this.svgContainer.nativeElement.getBoundingClientRect();
        const gElRect = this.g.nativeElement.getBoundingClientRect();
        g.attr('transform', `translate(
        ${svgRect.left - gElRect.left + svgPadding},
        ${svgRect.top - gElRect.top + svgPadding}
      )`);
        const height = gElRect.height + svgPadding * 2;
        const width = gElRect.width + svgPadding * 2;
        svg.attr('height', height).attr('width', width);
    }
}
RouterTreeComponent.ɵfac = function RouterTreeComponent_Factory(t) { return new (t || RouterTreeComponent)(i0.ɵɵdirectiveInject(i1.MessageBus)); };
RouterTreeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RouterTreeComponent, selectors: [["ng-router-tree"]], viewQuery: function RouterTreeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
        i0.ɵɵviewQuery(_c1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.g = _t.first);
    } }, inputs: { routes: "routes" }, decls: 8, vars: 2, consts: [[1, "router-tree-wrapper"], [1, "no-routes", 3, "hidden"], [1, "svg-container", 3, "hidden"], ["svgContainer", ""], ["mainGroup", ""]], template: function RouterTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h1");
        i0.ɵɵtext(3, " There are no routes to display. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 2, 3);
        i0.ɵɵelement(6, "g", null, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", (ctx.routes == null ? null : ctx.routes.length) !== 0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("hidden", (ctx.routes == null ? null : ctx.routes.length) === 0);
    } }, styles: [".router-tree-wrapper[_ngcontent-%COMP%]{font-size:1em;width:100%;height:100%;overflow-x:auto}.no-routes[_ngcontent-%COMP%]{padding-top:1rem;text-align:center;color:#b0b0b0}.svg-container[_ngcontent-%COMP%]{max-height:inherit}  .tooltip{position:absolute;background:#ebf1fb;border:0;border-radius:2px;pointer-events:none;font-family:Roboto,Helvetica Neue,sans-serif;font-size:.8rem;line-height:1.25rem}[_nghost-%COMP%]     .link{stroke:#9b9b9b;stroke-width:1px;fill:none}[_nghost-%COMP%]     .node{cursor:pointer}[_nghost-%COMP%]     .node-route{stroke:#f05057;fill:#fff0f0;stroke-width:1px}[_nghost-%COMP%]     .node-route.selected, [_nghost-%COMP%]     .node-route:hover{fill:#f05057}[_nghost-%COMP%]     .node-aux-route{stroke:#2828ab;fill:#ebf2fc;stroke-width:1px}[_nghost-%COMP%]     .node-aux-route.selected, [_nghost-%COMP%]     .node-aux-route:hover{fill:#2828ab}[_nghost-%COMP%]     text{fill:#000;font-weight:300}.dark-theme[_nghost-%COMP%]     .link, .dark-theme   [_nghost-%COMP%]     .link{stroke:#bcc5ce;stroke-width:1px;fill:none}.dark-theme[_nghost-%COMP%]     .node-route, .dark-theme   [_nghost-%COMP%]     .node-route{stroke:#54c9bd;fill:#202124}.dark-theme[_nghost-%COMP%]     .node-route.selected, .dark-theme   [_nghost-%COMP%]     .node-route.selected, .dark-theme[_nghost-%COMP%]     .node-route:hover, .dark-theme   [_nghost-%COMP%]     .node-route:hover{fill:#54c9bd}.dark-theme[_nghost-%COMP%]     .node-aux-route, .dark-theme   [_nghost-%COMP%]     .node-aux-route{stroke:#2828ab;fill:#ebf2fc}.dark-theme[_nghost-%COMP%]     .node-aux-route.selected, .dark-theme   [_nghost-%COMP%]     .node-aux-route.selected, .dark-theme[_nghost-%COMP%]     .node-aux-route:hover, .dark-theme   [_nghost-%COMP%]     .node-aux-route:hover{fill:#2828ab}.dark-theme[_nghost-%COMP%]     text, .dark-theme   [_nghost-%COMP%]     text{fill:#bcc5ce}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouterTreeComponent, [{
        type: Component,
        args: [{
                selector: 'ng-router-tree',
                templateUrl: './router-tree.component.html',
                styleUrls: ['./router-tree.component.scss'],
            }]
    }], function () { return [{ type: i1.MessageBus }]; }, { svgContainer: [{
            type: ViewChild,
            args: ['svgContainer', { static: true }]
        }], g: [{
            type: ViewChild,
            args: ['mainGroup', { static: true }]
        }], routes: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3JvdXRlci10cmVlL3JvdXRlci10cmVlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9yb3V0ZXItdHJlZS9yb3V0ZXItdHJlZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBNkIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDOzs7OztBQU96QixNQUFNLE9BQU8sbUJBQW1CO0lBYTlCLFlBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUozQyxZQUFPLEdBQVksRUFBRSxDQUFDO0lBSXdCLENBQUM7SUFUdkQsSUFBYSxNQUFNLENBQUMsTUFBZTtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQVFELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTTs7UUFDSixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNSO1FBRUQscUJBQXFCO1FBQ3JCLE1BQUEsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxNQUFNLGtEQUFJLENBQUM7UUFDekIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEs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LEVBQUUsSUFBSSxFQUFFO1lBQ08sQ0FBQztrQkFBbEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRTNCLE1BQU07a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VCdXMsIEV2ZW50cywgUm91dGUgfSBmcm9tICdwcm90b2NvbCc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXJvdXRlci10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JvdXRlci10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm91dGVyLXRyZWUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdzdmdDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHN2Z0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWFpbkdyb3VwJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBnOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIHNldCByb3V0ZXMocm91dGVzOiBSb3V0ZVtdKSB7XG4gICAgdGhpcy5fcm91dGVzID0gcm91dGVzO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIF9yb3V0ZXM6IFJvdXRlW10gPSBbXTtcbiAgcHJpdmF0ZSB0cmVlOiBkMy5UcmVlTGF5b3V0PHt9PjtcbiAgcHJpdmF0ZSB0b29sdGlwOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZUJ1czogTWVzc2FnZUJ1czxFdmVudHM+KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZXNzYWdlQnVzLmVtaXQoJ2dldFJvdXRlcycpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yb3V0ZXMubGVuZ3RoID09PSAwIHx8ICF0aGlzLmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjbGVhbnVwIG9sZCByZW5kZXJcbiAgICB0aGlzLnRvb2x0aXA/LnJlbW92ZT8uKCk7XG4gICAgZDMuc2VsZWN0KHRoaXMuZy5uYXRpdmVFbGVtZW50KS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHRoaXMudHJlZSA9IGQzLnRyZWUoKTtcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QodGhpcy5zdmdDb250YWluZXIubmF0aXZlRWxlbWVudCk7XG4gICAgc3ZnLmF0dHIoJ2hlaWdodCcsIDUwMCkuYXR0cignd2lkdGgnLCA1MDApO1xuXG4gICAgY29uc3QgZyA9IGQzLnNlbGVjdCh0aGlzLmcubmF0aXZlRWxlbWVudCk7XG5cbiAgICBjb25zdCBzdmdQYWRkaW5nID0gMjA7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBuZXcgdHJlZSBsYXlvdXQuXG4gICAgdGhpcy50cmVlLm5vZGVTaXplKFs3NSwgMjAwXSk7XG5cbiAgICBjb25zdCByb290OiBhbnkgPSB0aGlzLl9yb3V0ZXNbMF07XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMudHJlZShcbiAgICAgIGQzLmhpZXJhcmNoeShyb290LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCB8fCByb290LmNoaWxkcmVuLmxlbmd0aCA+IDEgPyByb290IDogcm9vdC5jaGlsZHJlblswXSwgKGQpID0+IGQuY2hpbGRyZW4pXG4gICAgKTtcblxuICAgIC8vIERlZmluZSB0aGUgZGl2IGZvciB0aGUgdG9vbHRpcFxuICAgIHRoaXMudG9vbHRpcCA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpLnN0eWxlKCdvcGFjaXR5JywgMCkuc3R5bGUoJ3BhZGRpbmcnLCAnMCcpO1xuXG4gICAgZy5zZWxlY3RBbGwoJy5saW5rJylcbiAgICAgIC5kYXRhKG5vZGVzLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cihcbiAgICAgICAgJ2QnLFxuICAgICAgICAoZCkgPT4gYFxuICAgICAgICAgICAgTSR7ZC55fSwke2QueH1cbiAgICAgICAgICAgIEMkeyhkLnkgKyBkLnBhcmVudC55KSAvIDJ9LFxuICAgICAgICAgICAgICAke2QueH0gJHsoZC55ICsgZC5wYXJlbnQueSkgLyAyfSxcbiAgICAgICAgICAgICAgJHtkLnBhcmVudC54fSAke2QucGFyZW50Lnl9LFxuICAgICAgICAgICAgICAke2QucGFyZW50Lnh9YFxuICAgICAgKTtcblxuICAgIC8vIERlY2xhcmUgdGhlIG5vZGVzXG4gICAgY29uc3Qgbm9kZSA9IGdcbiAgICAgIC5zZWxlY3RBbGwoJ2cubm9kZScpXG4gICAgICAuZGF0YShub2Rlcy5kZXNjZW5kYW50cygpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGUnKVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAobikgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYFxuICAgICAgICAgIDxiPk5hbWU6PC9iPiAke24uZGF0YS5uYW1lfTxici8+XG4gICAgICAgICAgPGI+UGF0aDo8L2I+ICR7bi5kYXRhLnBhdGh9PGJyLz5cbiAgICAgICAgICA8Yj5BdXhpbGlhcnkgUm91dGU6PC9iPiAke24uZGF0YS5pc0F1eH08YnIvPlxuICAgICAgICAgIDxiPlNwZWNpZmljaXR5OjwvYj4gJHtuLmRhdGEuc3BlY2lmaWNpdHl9PGJyLz5cbiAgICAgICAgICA8Yj5IYW5kbGVyOjwvYj4gJHtuLmRhdGEuaGFuZGxlcn08YnIvPlxuICAgICAgICBgO1xuICAgICAgICB0aGlzLnRvb2x0aXAuc3R5bGUoJ3BhZGRpbmcnLCAnNHB4IDhweCcpLnRyYW5zaXRpb24oKS5zdHlsZSgnb3BhY2l0eScsIDAuOSk7XG4gICAgICAgIHRoaXMudG9vbHRpcFxuICAgICAgICAgIC5odG1sKGNvbnRlbnQpXG4gICAgICAgICAgLnN0eWxlKCdsZWZ0JywgZDMuZXZlbnQucGFnZVggKyA4ICsgJ3B4JylcbiAgICAgICAgICAuc3R5bGUoJ3RvcCcsIGQzLmV2ZW50LnBhZ2VZICsgOCArICdweCcpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB0aGlzLnRvb2x0aXAudHJhbnNpdGlvbigpLnN0eWxlKCdvcGFjaXR5JywgMCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgIG5vZGVcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAoZCkgPT4gKChkLmRhdGEgYXMgYW55KS5pc0F1eCA/ICdub2RlLWF1eC1yb3V0ZScgOiAnbm9kZS1yb3V0ZScpKVxuICAgICAgLmF0dHIoJ3InLCA2KTtcblxuICAgIG5vZGVcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgKGQpID0+IChkLmRlcHRoID09PSAwIHx8ICFkLmNoaWxkcmVuID8gJzAuMzVlbScgOiAnLTEuNTBlbScpKVxuICAgICAgLmF0dHIoJ2R4JywgKGQpID0+IHtcbiAgICAgICAgaWYgKGQucGFyZW50ICYmIGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICByZXR1cm4gNjtcbiAgICAgICAgfSBlbHNlIGlmICghZC5wYXJlbnQgJiYgZC5jaGlsZHJlbikge1xuICAgICAgICAgIHJldHVybiAtMTM7XG4gICAgICAgIH0gZWxzZSBpZiAoZC5wYXJlbnQgJiYgIWQuY2hpbGRyZW4pIHtcbiAgICAgICAgICByZXR1cm4gMTM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAoZCkgPT4gKGQuY2hpbGRyZW4gPyAnZW5kJyA6ICdzdGFydCcpKVxuICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSAoZC5kYXRhIGFzIGFueSkubmFtZTtcbiAgICAgICAgcmV0dXJuIGxhYmVsLmxlbmd0aCA+IDIwID8gbGFiZWwuc2xpY2UoMCwgMTcpICsgJy4uLicgOiBsYWJlbDtcbiAgICAgIH0pO1xuXG4gICAgLy8gcmVzZXQgdHJhbnNmb3JtXG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJyk7XG5cbiAgICBjb25zdCBzdmdSZWN0ID0gdGhpcy5zdmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBnRWxSZWN0ID0gdGhpcy5nLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBnLmF0dHIoXG4gICAgICAndHJhbnNmb3JtJyxcbiAgICAgIGB0cmFuc2xhdGUoXG4gICAgICAgICR7c3ZnUmVjdC5sZWZ0IC0gZ0VsUmVjdC5sZWZ0ICsgc3ZnUGFkZGluZ30sXG4gICAgICAgICR7c3ZnUmVjdC50b3AgLSBnRWxSZWN0LnRvcCArIHN2Z1BhZGRpbmd9XG4gICAgICApYFxuICAgICk7XG4gICAgY29uc3QgaGVpZ2h0ID0gZ0VsUmVjdC5oZWlnaHQgKyBzdmdQYWRkaW5nICogMjtcbiAgICBjb25zdCB3aWR0aCA9IGdFbFJlY3Qud2lkdGggKyBzdmdQYWRkaW5nICogMjtcbiAgICBzdmcuYXR0cignaGVpZ2h0JywgaGVpZ2h0KS5hdHRyKCd3aWR0aCcsIHdpZHRoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInJvdXRlci10cmVlLXdyYXBwZXJcIj5cbiAgPGRpdiBjbGFzcz1cIm5vLXJvdXRlc1wiIFtoaWRkZW5dPVwicm91dGVzPy5sZW5ndGggIT09IDBcIj5cbiAgICA8aDE+XG4gICAgICBUaGVyZSBhcmUgbm8gcm91dGVzIHRvIGRpc3BsYXkuXG4gICAgPC9oMT5cbiAgPC9kaXY+XG4gIDxzdmcgI3N2Z0NvbnRhaW5lciBjbGFzcz1cInN2Zy1jb250YWluZXJcIiBbaGlkZGVuXT1cInJvdXRlcz8ubGVuZ3RoID09PSAwXCI+XG4gICAgPGcgI21haW5Hcm91cD48L2c+XG4gIDwvc3ZnPlxuPC9kaXY+XG4iXX0=