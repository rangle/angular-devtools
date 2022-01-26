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
    } }, styles: [".router-tree-wrapper[_ngcontent-%COMP%] {\n  font-size: 1em;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n}\n\n.no-routes[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  text-align: center;\n  color: #b0b0b0;\n}\n\n.svg-container[_ngcontent-%COMP%] {\n  max-height: inherit;\n}\n\n  {\n  .tooltip {\n    position: absolute;\n    background: #ebf1fb;\n    border: 0px;\n    border-radius: 2px;\n    pointer-events: none;\n    font-family: Roboto, 'Helvetica Neue', sans-serif;\n    font-size: 0.8rem;\n    line-height: 1.25rem;\n  }\n}\n\n[_nghost-%COMP%] {\n  ::ng-deep {\n    .link {\n      stroke: #9b9b9b;\n      stroke-width: 1px;\n      fill: none;\n    }\n\n    .node {\n      cursor: pointer;\n    }\n\n    .node-route {\n      stroke: #f05057;\n      fill: #fff0f0;\n      stroke-width: 1px;\n    }\n\n    & .node-route:hover,\n    & .node-route.selected {\n      fill: #f05057;\n    }\n\n    & .node-aux-route {\n      stroke: #2828ab;\n      fill: #ebf2fc;\n      stroke-width: 1px;\n    }\n\n    & .node-aux-route:hover,\n    & .node-aux-route.selected {\n      fill: #2828ab;\n    }\n\n    & text {\n      fill: #000000;\n      font-weight: 300;\n    }\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  ::ng-deep {\n    .link {\n      stroke: #bcc5ce;\n      stroke-width: 1px;\n      fill: none;\n    }\n\n    .node-route {\n      stroke: #54c9bd;\n      fill: #242424;\n    }\n\n    & .node-route:hover,\n    & .node-route.selected {\n      fill: #54c9bd;\n    }\n\n    & .node-aux-route {\n      stroke: #2828ab;\n      fill: #ebf2fc;\n    }\n\n    & .node-aux-route:hover,\n    & .node-aux-route.selected {\n      fill: #2828ab;\n    }\n\n    & text {\n      fill: #bcc5ce;\n    }\n  }\n}"] });
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
//# sourceMappingURL=router-tree.component.js.map