export const runOutsideAngular = (f) => {
    const w = window;
    if (!w.Zone || !w.Zone.current) {
        f();
        return;
    }
    if (w.Zone.current._name !== 'angular') {
        w.Zone.current.run(f);
        return;
    }
    w.Zone.current._parent.run(f);
};
export const componentMetadata = (instance) => instance.constructor.ɵcmp;
export const isCustomElement = (node) => {
    if (typeof customElements === 'undefined') {
        return false;
    }
    if (!(node instanceof HTMLElement)) {
        return false;
    }
    const tagName = node.tagName.toLowerCase();
    return !!customElements.get(tagName);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy1iYWNrZW5kL3NyYy9saWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFZLEVBQVEsRUFBRTtJQUN0RCxNQUFNLENBQUMsR0FBRyxNQUFhLENBQUM7SUFDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUM5QixDQUFDLEVBQUUsQ0FBQztRQUNKLE9BQU87S0FDUjtJQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTztLQUNSO0lBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFFOUUsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7SUFDNUMsSUFBSSxPQUFPLGNBQWMsS0FBSyxXQUFXLEVBQUU7UUFDekMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksQ0FBQyxDQUFDLElBQUksWUFBWSxXQUFXLENBQUMsRUFBRTtRQUNsQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBydW5PdXRzaWRlQW5ndWxhciA9IChmOiAoKSA9PiBhbnkpOiB2b2lkID0+IHtcbiAgY29uc3QgdyA9IHdpbmRvdyBhcyBhbnk7XG4gIGlmICghdy5ab25lIHx8ICF3LlpvbmUuY3VycmVudCkge1xuICAgIGYoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHcuWm9uZS5jdXJyZW50Ll9uYW1lICE9PSAnYW5ndWxhcicpIHtcbiAgICB3LlpvbmUuY3VycmVudC5ydW4oZik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHcuWm9uZS5jdXJyZW50Ll9wYXJlbnQucnVuKGYpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudE1ldGFkYXRhID0gKGluc3RhbmNlOiBhbnkpID0+IGluc3RhbmNlLmNvbnN0cnVjdG9yLsm1Y21wO1xuXG5leHBvcnQgY29uc3QgaXNDdXN0b21FbGVtZW50ID0gKG5vZGU6IE5vZGUpID0+IHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB0YWdOYW1lID0gbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAhIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKTtcbn07XG4iXX0=