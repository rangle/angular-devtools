import { arrayEquals } from 'shared-utils';
const CONSOLE_REFERENCE_PREFIX = '$ng';
const CAPACITY = 5;
const nodesForConsoleReference = [];
export const setConsoleReference = (referenceNode) => {
    if (referenceNode.node === null) {
        return;
    }
    _setConsoleReference(referenceNode);
};
const _setConsoleReference = (referenceNode) => {
    prepareCurrentReferencesForInsertion(referenceNode);
    nodesForConsoleReference.unshift(referenceNode);
    assignConsoleReferencesFrom(nodesForConsoleReference);
};
const prepareCurrentReferencesForInsertion = (referenceNode) => {
    const foundIndex = nodesForConsoleReference.findIndex((nodeToLookFor) => arrayEquals(nodeToLookFor.position, referenceNode.position));
    if (foundIndex !== -1) {
        nodesForConsoleReference.splice(foundIndex, 1);
    }
    else if (nodesForConsoleReference.length === CAPACITY) {
        nodesForConsoleReference.pop();
    }
};
const assignConsoleReferencesFrom = (referenceNodes) => {
    referenceNodes.forEach((referenceNode, index) => setDirectiveKey(referenceNode.node, getConsoleReferenceWithIndexOf(index)));
};
const setDirectiveKey = (node, key) => {
    Object.defineProperty(window, key, {
        get: () => {
            if (node === null || node === void 0 ? void 0 : node.component) {
                return node.component.instance;
            }
            if (node === null || node === void 0 ? void 0 : node.nativeElement) {
                return node.nativeElement;
            }
            return node;
        },
        configurable: true,
    });
};
const getConsoleReferenceWithIndexOf = (consoleReferenceIndex) => `${CONSOLE_REFERENCE_PREFIX}${consoleReferenceIndex}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbnNvbGUtcmVmZXJlbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMtYmFja2VuZC9zcmMvbGliL3NldC1jb25zb2xlLXJlZmVyZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUzNDLE1BQU0sd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVuQixNQUFNLHdCQUF3QixHQUEyQixFQUFFLENBQUM7QUFFNUQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxhQUFtQyxFQUFFLEVBQUU7SUFDekUsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtRQUMvQixPQUFPO0tBQ1I7SUFDRCxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLENBQUMsYUFBbUMsRUFBRSxFQUFFO0lBQ25FLG9DQUFvQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCwyQkFBMkIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUVGLE1BQU0sb0NBQW9DLEdBQUcsQ0FBQyxhQUFtQyxFQUFFLEVBQUU7SUFDbkYsTUFBTSxVQUFVLEdBQUcsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FDdEUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUM1RCxDQUFDO0lBQ0YsSUFBSSxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDckIsd0JBQXdCLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoRDtTQUFNLElBQUksd0JBQXdCLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUN2RCx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNoQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sMkJBQTJCLEdBQUcsQ0FBQyxjQUFzQyxFQUFFLEVBQUU7SUFDN0UsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUM5QyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMzRSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUE4QixFQUFFLEdBQVcsRUFBRSxFQUFFO0lBQ3RFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNqQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ1IsSUFBSSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsU0FBUyxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsYUFBYSxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDM0I7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxZQUFZLEVBQUUsSUFBSTtLQUNuQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLDhCQUE4QixHQUFHLENBQUMscUJBQTZCLEVBQUUsRUFBRSxDQUN2RSxHQUFHLHdCQUF3QixHQUFHLHFCQUFxQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheUVxdWFscyB9IGZyb20gJ3NoYXJlZC11dGlscyc7XG5pbXBvcnQgeyBFbGVtZW50UG9zaXRpb24gfSBmcm9tICdwcm90b2NvbCc7XG5pbXBvcnQgeyBDb21wb25lbnRUcmVlTm9kZSB9IGZyb20gJy4vY29tcG9uZW50LXRyZWUnO1xuXG5pbnRlcmZhY2UgQ29uc29sZVJlZmVyZW5jZU5vZGUge1xuICBub2RlOiBDb21wb25lbnRUcmVlTm9kZSB8IG51bGw7XG4gIHBvc2l0aW9uOiBFbGVtZW50UG9zaXRpb247XG59XG5cbmNvbnN0IENPTlNPTEVfUkVGRVJFTkNFX1BSRUZJWCA9ICckbmcnO1xuY29uc3QgQ0FQQUNJVFkgPSA1O1xuXG5jb25zdCBub2Rlc0ZvckNvbnNvbGVSZWZlcmVuY2U6IENvbnNvbGVSZWZlcmVuY2VOb2RlW10gPSBbXTtcblxuZXhwb3J0IGNvbnN0IHNldENvbnNvbGVSZWZlcmVuY2UgPSAocmVmZXJlbmNlTm9kZTogQ29uc29sZVJlZmVyZW5jZU5vZGUpID0+IHtcbiAgaWYgKHJlZmVyZW5jZU5vZGUubm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBfc2V0Q29uc29sZVJlZmVyZW5jZShyZWZlcmVuY2VOb2RlKTtcbn07XG5cbmNvbnN0IF9zZXRDb25zb2xlUmVmZXJlbmNlID0gKHJlZmVyZW5jZU5vZGU6IENvbnNvbGVSZWZlcmVuY2VOb2RlKSA9PiB7XG4gIHByZXBhcmVDdXJyZW50UmVmZXJlbmNlc0Zvckluc2VydGlvbihyZWZlcmVuY2VOb2RlKTtcbiAgbm9kZXNGb3JDb25zb2xlUmVmZXJlbmNlLnVuc2hpZnQocmVmZXJlbmNlTm9kZSk7XG4gIGFzc2lnbkNvbnNvbGVSZWZlcmVuY2VzRnJvbShub2Rlc0ZvckNvbnNvbGVSZWZlcmVuY2UpO1xufTtcblxuY29uc3QgcHJlcGFyZUN1cnJlbnRSZWZlcmVuY2VzRm9ySW5zZXJ0aW9uID0gKHJlZmVyZW5jZU5vZGU6IENvbnNvbGVSZWZlcmVuY2VOb2RlKSA9PiB7XG4gIGNvbnN0IGZvdW5kSW5kZXggPSBub2Rlc0ZvckNvbnNvbGVSZWZlcmVuY2UuZmluZEluZGV4KChub2RlVG9Mb29rRm9yKSA9PlxuICAgIGFycmF5RXF1YWxzKG5vZGVUb0xvb2tGb3IucG9zaXRpb24sIHJlZmVyZW5jZU5vZGUucG9zaXRpb24pXG4gICk7XG4gIGlmIChmb3VuZEluZGV4ICE9PSAtMSkge1xuICAgIG5vZGVzRm9yQ29uc29sZVJlZmVyZW5jZS5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gIH0gZWxzZSBpZiAobm9kZXNGb3JDb25zb2xlUmVmZXJlbmNlLmxlbmd0aCA9PT0gQ0FQQUNJVFkpIHtcbiAgICBub2Rlc0ZvckNvbnNvbGVSZWZlcmVuY2UucG9wKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFzc2lnbkNvbnNvbGVSZWZlcmVuY2VzRnJvbSA9IChyZWZlcmVuY2VOb2RlczogQ29uc29sZVJlZmVyZW5jZU5vZGVbXSkgPT4ge1xuICByZWZlcmVuY2VOb2Rlcy5mb3JFYWNoKChyZWZlcmVuY2VOb2RlLCBpbmRleCkgPT5cbiAgICBzZXREaXJlY3RpdmVLZXkocmVmZXJlbmNlTm9kZS5ub2RlLCBnZXRDb25zb2xlUmVmZXJlbmNlV2l0aEluZGV4T2YoaW5kZXgpKVxuICApO1xufTtcblxuY29uc3Qgc2V0RGlyZWN0aXZlS2V5ID0gKG5vZGU6IENvbXBvbmVudFRyZWVOb2RlIHwgbnVsbCwga2V5OiBzdHJpbmcpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywga2V5LCB7XG4gICAgZ2V0OiAoKSA9PiB7XG4gICAgICBpZiAobm9kZT8uY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBub2RlLmNvbXBvbmVudC5pbnN0YW5jZTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlPy5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBub2RlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRDb25zb2xlUmVmZXJlbmNlV2l0aEluZGV4T2YgPSAoY29uc29sZVJlZmVyZW5jZUluZGV4OiBudW1iZXIpID0+XG4gIGAke0NPTlNPTEVfUkVGRVJFTkNFX1BSRUZJWH0ke2NvbnNvbGVSZWZlcmVuY2VJbmRleH1gO1xuIl19