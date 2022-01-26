import { RecordFormatter } from '../record-formatter';
export const ROOT_LEVEL_ELEMENT_LABEL = 'Entire application';
export class FlamegraphFormatter extends RecordFormatter {
    formatFrame(frame, showChangeDetection, theme) {
        const result = {
            value: 0,
            label: ROOT_LEVEL_ELEMENT_LABEL,
            children: [],
            instances: 1,
            changeDetected: false,
            original: {
                children: [],
                directives: [],
            },
        };
        if (showChangeDetection) {
            result.color = theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
        }
        this.addFrame(result.children, frame.directives, showChangeDetection, theme);
        return result;
    }
    addFrame(nodes, elements, showChangeDetection, theme) {
        let timeSpent = 0;
        elements.forEach((element) => {
            // Possibly undefined because of
            // the insertion on the backend.
            if (!element) {
                console.error('Unable to insert undefined element');
                return;
            }
            const changeDetected = didRunChangeDetection(element);
            const node = {
                value: super.getValue(element),
                label: super.getLabel(element),
                children: [],
                instances: 1,
                original: element,
                changeDetected,
            };
            if (showChangeDetection) {
                const CHANGE_DETECTION_COLOR = theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
                node.color = changeDetected ? CHANGE_DETECTION_COLOR : NO_CHANGE_DETECTION_COLOR;
            }
            timeSpent += this.addFrame(node.children, element.children, showChangeDetection, theme);
            timeSpent += node.value;
            nodes.push(node);
        });
        return timeSpent;
    }
}
const CHANGE_DETECTION_COLOR_LIGHT = '#5cadd3';
const CHANGE_DETECTION_COLOR_DARK = '#073d69';
const NO_CHANGE_DETECTION_COLOR = 'transparent';
const didRunChangeDetection = (profile) => {
    const components = profile.directives.filter((d) => d.isComponent);
    if (!components.length) {
        return false;
    }
    return components.some((c) => c.changeDetection !== undefined);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWVncmFwaC1mb3JtYXR0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZC1mb3JtYXR0ZXIvZmxhbWVncmFwaC1mb3JtYXR0ZXIvZmxhbWVncmFwaC1mb3JtYXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBY3RELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLG9CQUFvQixDQUFDO0FBRTdELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxlQUErQjtJQUN0RSxXQUFXLENBQUMsS0FBb0IsRUFBRSxtQkFBNkIsRUFBRSxLQUFhO1FBQzVFLE1BQU0sTUFBTSxHQUFtQjtZQUM3QixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSx3QkFBd0I7WUFDL0IsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFFBQVEsRUFBRTtnQkFDUixRQUFRLEVBQUUsRUFBRTtnQkFDWixVQUFVLEVBQUUsRUFBRTthQUNmO1NBQ0YsQ0FBQztRQUVGLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUM7U0FDcEc7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQXVCLEVBQUUsUUFBMEIsRUFBRSxtQkFBNkIsRUFBRSxLQUFhO1FBQ3hHLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDM0IsZ0NBQWdDO1lBQ2hDLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNSO1lBQ0QsTUFBTSxjQUFjLEdBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEQsTUFBTSxJQUFJLEdBQW1CO2dCQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLENBQUM7Z0JBQ1osUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLGNBQWM7YUFDZixDQUFDO1lBQ0YsSUFBSSxtQkFBbUIsRUFBRTtnQkFDdkIsTUFBTSxzQkFBc0IsR0FDMUIsS0FBSyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDO2dCQUN0RixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO2FBQ2xGO1lBQ0QsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hGLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLDRCQUE0QixHQUFHLFNBQVMsQ0FBQztBQUMvQyxNQUFNLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztBQUM5QyxNQUFNLHlCQUF5QixHQUFHLGFBQWEsQ0FBQztBQUVoRCxNQUFNLHFCQUFxQixHQUFHLENBQUMsT0FBdUIsRUFBRSxFQUFFO0lBQ3hELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWNvcmRGb3JtYXR0ZXIgfSBmcm9tICcuLi9yZWNvcmQtZm9ybWF0dGVyJztcbmltcG9ydCB7IEVsZW1lbnRQcm9maWxlLCBQcm9maWxlckZyYW1lIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi90aGVtZS1zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGFtZWdyYXBoTm9kZSB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjaGlsZHJlbjogRmxhbWVncmFwaE5vZGVbXTtcbiAgbGFiZWw6IHN0cmluZztcbiAgaW5zdGFuY2VzOiBudW1iZXI7XG4gIG9yaWdpbmFsOiBFbGVtZW50UHJvZmlsZTtcbiAgY2hhbmdlRGV0ZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBST09UX0xFVkVMX0VMRU1FTlRfTEFCRUwgPSAnRW50aXJlIGFwcGxpY2F0aW9uJztcblxuZXhwb3J0IGNsYXNzIEZsYW1lZ3JhcGhGb3JtYXR0ZXIgZXh0ZW5kcyBSZWNvcmRGb3JtYXR0ZXI8RmxhbWVncmFwaE5vZGU+IHtcbiAgZm9ybWF0RnJhbWUoZnJhbWU6IFByb2ZpbGVyRnJhbWUsIHNob3dDaGFuZ2VEZXRlY3Rpb24/OiBib29sZWFuLCB0aGVtZT86IFRoZW1lKTogRmxhbWVncmFwaE5vZGUge1xuICAgIGNvbnN0IHJlc3VsdDogRmxhbWVncmFwaE5vZGUgPSB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIGxhYmVsOiBST09UX0xFVkVMX0VMRU1FTlRfTEFCRUwsXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBpbnN0YW5jZXM6IDEsXG4gICAgICBjaGFuZ2VEZXRlY3RlZDogZmFsc2UsXG4gICAgICBvcmlnaW5hbDoge1xuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKHNob3dDaGFuZ2VEZXRlY3Rpb24pIHtcbiAgICAgIHJlc3VsdC5jb2xvciA9IHRoZW1lID09PSAnZGFyay10aGVtZScgPyBDSEFOR0VfREVURUNUSU9OX0NPTE9SX0RBUksgOiBDSEFOR0VfREVURUNUSU9OX0NPTE9SX0xJR0hUO1xuICAgIH1cblxuICAgIHRoaXMuYWRkRnJhbWUocmVzdWx0LmNoaWxkcmVuLCBmcmFtZS5kaXJlY3RpdmVzLCBzaG93Q2hhbmdlRGV0ZWN0aW9uLCB0aGVtZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFkZEZyYW1lKG5vZGVzOiBGbGFtZWdyYXBoTm9kZVtdLCBlbGVtZW50czogRWxlbWVudFByb2ZpbGVbXSwgc2hvd0NoYW5nZURldGVjdGlvbj86IGJvb2xlYW4sIHRoZW1lPzogVGhlbWUpOiBudW1iZXIge1xuICAgIGxldCB0aW1lU3BlbnQgPSAwO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIC8vIFBvc3NpYmx5IHVuZGVmaW5lZCBiZWNhdXNlIG9mXG4gICAgICAvLyB0aGUgaW5zZXJ0aW9uIG9uIHRoZSBiYWNrZW5kLlxuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBpbnNlcnQgdW5kZWZpbmVkIGVsZW1lbnQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hhbmdlRGV0ZWN0ZWQgPSBkaWRSdW5DaGFuZ2VEZXRlY3Rpb24oZWxlbWVudCk7XG4gICAgICBjb25zdCBub2RlOiBGbGFtZWdyYXBoTm9kZSA9IHtcbiAgICAgICAgdmFsdWU6IHN1cGVyLmdldFZhbHVlKGVsZW1lbnQpLFxuICAgICAgICBsYWJlbDogc3VwZXIuZ2V0TGFiZWwoZWxlbWVudCksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgaW5zdGFuY2VzOiAxLFxuICAgICAgICBvcmlnaW5hbDogZWxlbWVudCxcbiAgICAgICAgY2hhbmdlRGV0ZWN0ZWQsXG4gICAgICB9O1xuICAgICAgaWYgKHNob3dDaGFuZ2VEZXRlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgQ0hBTkdFX0RFVEVDVElPTl9DT0xPUiA9XG4gICAgICAgICAgdGhlbWUgPT09ICdkYXJrLXRoZW1lJyA/IENIQU5HRV9ERVRFQ1RJT05fQ09MT1JfREFSSyA6IENIQU5HRV9ERVRFQ1RJT05fQ09MT1JfTElHSFQ7XG4gICAgICAgIG5vZGUuY29sb3IgPSBjaGFuZ2VEZXRlY3RlZCA/IENIQU5HRV9ERVRFQ1RJT05fQ09MT1IgOiBOT19DSEFOR0VfREVURUNUSU9OX0NPTE9SO1xuICAgICAgfVxuICAgICAgdGltZVNwZW50ICs9IHRoaXMuYWRkRnJhbWUobm9kZS5jaGlsZHJlbiwgZWxlbWVudC5jaGlsZHJlbiwgc2hvd0NoYW5nZURldGVjdGlvbiwgdGhlbWUpO1xuICAgICAgdGltZVNwZW50ICs9IG5vZGUudmFsdWU7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aW1lU3BlbnQ7XG4gIH1cbn1cblxuY29uc3QgQ0hBTkdFX0RFVEVDVElPTl9DT0xPUl9MSUdIVCA9ICcjNWNhZGQzJztcbmNvbnN0IENIQU5HRV9ERVRFQ1RJT05fQ09MT1JfREFSSyA9ICcjMDczZDY5JztcbmNvbnN0IE5PX0NIQU5HRV9ERVRFQ1RJT05fQ09MT1IgPSAndHJhbnNwYXJlbnQnO1xuXG5jb25zdCBkaWRSdW5DaGFuZ2VEZXRlY3Rpb24gPSAocHJvZmlsZTogRWxlbWVudFByb2ZpbGUpID0+IHtcbiAgY29uc3QgY29tcG9uZW50cyA9IHByb2ZpbGUuZGlyZWN0aXZlcy5maWx0ZXIoKGQpID0+IGQuaXNDb21wb25lbnQpO1xuICBpZiAoIWNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBjb21wb25lbnRzLnNvbWUoKGMpID0+IGMuY2hhbmdlRGV0ZWN0aW9uICE9PSB1bmRlZmluZWQpO1xufTtcbiJdfQ==