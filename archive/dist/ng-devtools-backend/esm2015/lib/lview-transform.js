import { isCustomElement } from './utils';
import { getDirectiveName } from './highlighter';
import { SemVerDSL } from 'semver-dsl';
import { VERSION } from './version';
let HEADER_OFFSET = 19;
const latest = () => {
    HEADER_OFFSET = 20;
};
SemVerDSL(VERSION).gte('10.0.0-next.4', latest);
// In g3 everyone has version 0.0.0, using HEAD from master.
SemVerDSL(VERSION).eq('0.0.0', latest);
const TYPE = 1;
const ELEMENT = 0;
const LVIEW_TVIEW = 1;
export const METADATA_PROPERTY_NAME = '__ngContext__';
const isLContainer = (value) => {
    return Array.isArray(value) && value[TYPE] === true;
};
const isLView = (value) => {
    return Array.isArray(value) && typeof value[TYPE] === 'object';
};
export const getLViewFromDirectiveOrElementInstance = (dir) => {
    if (!dir) {
        return null;
    }
    const context = dir[METADATA_PROPERTY_NAME];
    if (!context) {
        return null;
    }
    if (isLView(context)) {
        return context;
    }
    return context.lView;
};
export const getDirectiveHostElement = (dir) => {
    const ctx = dir[METADATA_PROPERTY_NAME];
    if (ctx[0] !== null) {
        return ctx[0];
    }
    const components = ctx[LVIEW_TVIEW].components;
    if (!components || components.length !== 1) {
        return false;
    }
    return ctx[components[0]][0];
};
const getNode = (lView, data, idx) => {
    const directives = [];
    let component = null;
    const tNode = data[idx];
    const node = lView[idx][ELEMENT];
    const elementName = (node.tagName || node.nodeName).toLowerCase();
    for (let i = tNode.directiveStart; i < tNode.directiveEnd; i++) {
        const dir = lView[i];
        const dirMeta = data[i];
        if (dirMeta && dirMeta.template) {
            component = {
                name: elementName,
                instance: dir,
                isElement: isCustomElement(node),
            };
        }
        else if (dirMeta) {
            directives.push({
                name: getDirectiveName(dir),
                instance: dir,
            });
        }
    }
    return {
        element: elementName,
        nativeElement: lView[idx][ELEMENT],
        directives,
        component,
        children: [],
    };
};
const extractNodes = (lViewOrLContainer, nodes = []) => {
    if (isLContainer(lViewOrLContainer)) {
        for (let i = 9; i < lViewOrLContainer.length; i++) {
            if (lViewOrLContainer[i]) {
                extractNodes(lViewOrLContainer[i], nodes);
            }
        }
        return nodes;
    }
    const lView = lViewOrLContainer;
    const tView = lView[LVIEW_TVIEW];
    for (let i = HEADER_OFFSET; i < lView.length; i++) {
        if (lView[i] && tView.data && lView[i][ELEMENT] instanceof Node) {
            const node = getNode(lView, tView.data, i);
            // TODO(mgechev): verify if this won't make us skip projected content.
            if (node.component || node.directives.length) {
                nodes.push(node);
                extractNodes(lView[i], node.children);
            }
        }
    }
    return nodes;
};
export const buildDirectiveTree = (lView) => extractNodes(lView);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHZpZXctdHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMtYmFja2VuZC9zcmMvbGliL2x2aWV3LXRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBRXZCLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNsQixhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRWhELDREQUE0RDtBQUM1RCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUV2QyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDbEIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLGVBQWUsQ0FBQztBQUV0RCxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQVUsRUFBVyxFQUFFO0lBQzNDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO0FBQ3RELENBQUMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBVSxFQUFXLEVBQUU7SUFDdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqRSxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxzQ0FBc0MsR0FBRyxDQUFDLEdBQVEsRUFBYSxFQUFFO0lBQzVFLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNwQixPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQ2xELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNmO0lBQ0QsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvQyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzFDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVUsRUFBRSxJQUFTLEVBQUUsR0FBVyxFQUFxQixFQUFFO0lBQ3hFLE1BQU0sVUFBVSxHQUE0QixFQUFFLENBQUM7SUFDL0MsSUFBSSxTQUFTLEdBQWlDLElBQUksQ0FBQztJQUNuRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMvQixTQUFTLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDO2FBQ2pDLENBQUM7U0FDSDthQUFNLElBQUksT0FBTyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDM0IsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUM7U0FDSjtLQUNGO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLGFBQWEsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2xDLFVBQVU7UUFDVixTQUFTO1FBQ1QsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxpQkFBc0IsRUFBRSxRQUE2QixFQUFFLEVBQXVCLEVBQUU7SUFDcEcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMzQztTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDO0lBQ2hDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLEVBQUU7WUFDL0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTNDLHNFQUFzRTtZQUN0RSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFRyZWVOb2RlLCBDb21wb25lbnRJbnN0YW5jZVR5cGUsIERpcmVjdGl2ZUluc3RhbmNlVHlwZSB9IGZyb20gJy4vY29tcG9uZW50LXRyZWUnO1xuaW1wb3J0IHsgaXNDdXN0b21FbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZXREaXJlY3RpdmVOYW1lIH0gZnJvbSAnLi9oaWdobGlnaHRlcic7XG5pbXBvcnQgeyBTZW1WZXJEU0wgfSBmcm9tICdzZW12ZXItZHNsJztcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tICcuL3ZlcnNpb24nO1xuXG5sZXQgSEVBREVSX09GRlNFVCA9IDE5O1xuXG5jb25zdCBsYXRlc3QgPSAoKSA9PiB7XG4gIEhFQURFUl9PRkZTRVQgPSAyMDtcbn07XG5cblNlbVZlckRTTChWRVJTSU9OKS5ndGUoJzEwLjAuMC1uZXh0LjQnLCBsYXRlc3QpO1xuXG4vLyBJbiBnMyBldmVyeW9uZSBoYXMgdmVyc2lvbiAwLjAuMCwgdXNpbmcgSEVBRCBmcm9tIG1hc3Rlci5cblNlbVZlckRTTChWRVJTSU9OKS5lcSgnMC4wLjAnLCBsYXRlc3QpO1xuXG5jb25zdCBUWVBFID0gMTtcbmNvbnN0IEVMRU1FTlQgPSAwO1xuY29uc3QgTFZJRVdfVFZJRVcgPSAxO1xuZXhwb3J0IGNvbnN0IE1FVEFEQVRBX1BST1BFUlRZX05BTUUgPSAnX19uZ0NvbnRleHRfXyc7XG5cbmNvbnN0IGlzTENvbnRhaW5lciA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZVtUWVBFXSA9PT0gdHJ1ZTtcbn07XG5cbmNvbnN0IGlzTFZpZXcgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlW1RZUEVdID09PSAnb2JqZWN0Jztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMVmlld0Zyb21EaXJlY3RpdmVPckVsZW1lbnRJbnN0YW5jZSA9IChkaXI6IGFueSk6IG51bGwgfCB7fSA9PiB7XG4gIGlmICghZGlyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgY29udGV4dCA9IGRpcltNRVRBREFUQV9QUk9QRVJUWV9OQU1FXTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGlzTFZpZXcoY29udGV4dCkpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuICByZXR1cm4gY29udGV4dC5sVmlldztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREaXJlY3RpdmVIb3N0RWxlbWVudCA9IChkaXI6IGFueSkgPT4ge1xuICBjb25zdCBjdHggPSBkaXJbTUVUQURBVEFfUFJPUEVSVFlfTkFNRV07XG4gIGlmIChjdHhbMF0gIT09IG51bGwpIHtcbiAgICByZXR1cm4gY3R4WzBdO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBjdHhbTFZJRVdfVFZJRVddLmNvbXBvbmVudHM7XG4gIGlmICghY29tcG9uZW50cyB8fCBjb21wb25lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gY3R4W2NvbXBvbmVudHNbMF1dWzBdO1xufTtcblxuY29uc3QgZ2V0Tm9kZSA9IChsVmlldzogYW55LCBkYXRhOiBhbnksIGlkeDogbnVtYmVyKTogQ29tcG9uZW50VHJlZU5vZGUgPT4ge1xuICBjb25zdCBkaXJlY3RpdmVzOiBEaXJlY3RpdmVJbnN0YW5jZVR5cGVbXSA9IFtdO1xuICBsZXQgY29tcG9uZW50OiBDb21wb25lbnRJbnN0YW5jZVR5cGUgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgdE5vZGUgPSBkYXRhW2lkeF07XG4gIGNvbnN0IG5vZGUgPSBsVmlld1tpZHhdW0VMRU1FTlRdO1xuICBjb25zdCBlbGVtZW50TmFtZSA9IChub2RlLnRhZ05hbWUgfHwgbm9kZS5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgZm9yIChsZXQgaSA9IHROb2RlLmRpcmVjdGl2ZVN0YXJ0OyBpIDwgdE5vZGUuZGlyZWN0aXZlRW5kOyBpKyspIHtcbiAgICBjb25zdCBkaXIgPSBsVmlld1tpXTtcbiAgICBjb25zdCBkaXJNZXRhID0gZGF0YVtpXTtcbiAgICBpZiAoZGlyTWV0YSAmJiBkaXJNZXRhLnRlbXBsYXRlKSB7XG4gICAgICBjb21wb25lbnQgPSB7XG4gICAgICAgIG5hbWU6IGVsZW1lbnROYW1lLFxuICAgICAgICBpbnN0YW5jZTogZGlyLFxuICAgICAgICBpc0VsZW1lbnQ6IGlzQ3VzdG9tRWxlbWVudChub2RlKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkaXJNZXRhKSB7XG4gICAgICBkaXJlY3RpdmVzLnB1c2goe1xuICAgICAgICBuYW1lOiBnZXREaXJlY3RpdmVOYW1lKGRpciksXG4gICAgICAgIGluc3RhbmNlOiBkaXIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbGVtZW50OiBlbGVtZW50TmFtZSxcbiAgICBuYXRpdmVFbGVtZW50OiBsVmlld1tpZHhdW0VMRU1FTlRdLFxuICAgIGRpcmVjdGl2ZXMsXG4gICAgY29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgfTtcbn07XG5cbmNvbnN0IGV4dHJhY3ROb2RlcyA9IChsVmlld09yTENvbnRhaW5lcjogYW55LCBub2RlczogQ29tcG9uZW50VHJlZU5vZGVbXSA9IFtdKTogQ29tcG9uZW50VHJlZU5vZGVbXSA9PiB7XG4gIGlmIChpc0xDb250YWluZXIobFZpZXdPckxDb250YWluZXIpKSB7XG4gICAgZm9yIChsZXQgaSA9IDk7IGkgPCBsVmlld09yTENvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxWaWV3T3JMQ29udGFpbmVyW2ldKSB7XG4gICAgICAgIGV4dHJhY3ROb2RlcyhsVmlld09yTENvbnRhaW5lcltpXSwgbm9kZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgY29uc3QgbFZpZXcgPSBsVmlld09yTENvbnRhaW5lcjtcbiAgY29uc3QgdFZpZXcgPSBsVmlld1tMVklFV19UVklFV107XG4gIGZvciAobGV0IGkgPSBIRUFERVJfT0ZGU0VUOyBpIDwgbFZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobFZpZXdbaV0gJiYgdFZpZXcuZGF0YSAmJiBsVmlld1tpXVtFTEVNRU5UXSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBnZXROb2RlKGxWaWV3LCB0Vmlldy5kYXRhLCBpKTtcblxuICAgICAgLy8gVE9ETyhtZ2VjaGV2KTogdmVyaWZ5IGlmIHRoaXMgd29uJ3QgbWFrZSB1cyBza2lwIHByb2plY3RlZCBjb250ZW50LlxuICAgICAgaWYgKG5vZGUuY29tcG9uZW50IHx8IG5vZGUuZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgZXh0cmFjdE5vZGVzKGxWaWV3W2ldLCBub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkRGlyZWN0aXZlVHJlZSA9IChsVmlldzogYW55KSA9PiBleHRyYWN0Tm9kZXMobFZpZXcpO1xuIl19