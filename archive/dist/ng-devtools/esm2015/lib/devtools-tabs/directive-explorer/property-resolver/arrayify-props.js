export const arrayifyProps = (props, parent = null) => Object.keys(props)
    .map((name) => ({ name, descriptor: props[name], parent }))
    .sort((a, b) => {
    const parsedA = parseInt(a.name, 10);
    const parsedB = parseInt(b.name, 10);
    if (isNaN(parsedA) || isNaN(parsedB)) {
        return a.name > b.name ? 1 : -1;
    }
    return parsedA - parsedB;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlpZnktcHJvcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXJlc29sdmVyL2FycmF5aWZ5LXByb3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixLQUFvRCxFQUNwRCxTQUEwQixJQUFJLEVBQ2xCLEVBQUUsQ0FDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDMUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFckMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsT0FBTyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVzY3JpcHRvciB9IGZyb20gJ3Byb3RvY29sJztcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSAnLi9lbGVtZW50LXByb3BlcnR5LXJlc29sdmVyJztcblxuZXhwb3J0IGNvbnN0IGFycmF5aWZ5UHJvcHMgPSAoXG4gIHByb3BzOiB7IFtwcm9wOiBzdHJpbmddOiBEZXNjcmlwdG9yIH0gfCBEZXNjcmlwdG9yW10sXG4gIHBhcmVudDogUHJvcGVydHkgfCBudWxsID0gbnVsbFxuKTogUHJvcGVydHlbXSA9PlxuICBPYmplY3Qua2V5cyhwcm9wcylcbiAgICAubWFwKChuYW1lKSA9PiAoeyBuYW1lLCBkZXNjcmlwdG9yOiBwcm9wc1tuYW1lXSwgcGFyZW50IH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBwYXJzZWRBID0gcGFyc2VJbnQoYS5uYW1lLCAxMCk7XG4gICAgICBjb25zdCBwYXJzZWRCID0gcGFyc2VJbnQoYi5uYW1lLCAxMCk7XG5cbiAgICAgIGlmIChpc05hTihwYXJzZWRBKSB8fCBpc05hTihwYXJzZWRCKSkge1xuICAgICAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkQSAtIHBhcnNlZEI7XG4gICAgfSk7XG4iXX0=