import { ComponentInspector } from './component-inspector';

describe('ComponentInspector', () => {
  it('should create instance from class', () => {
    const inspector = new ComponentInspector();
    expect(inspector).toBeTruthy();
  });

  it('should add event listeners to window on start inspecting', () => {
    const eventsSpy = spyOn(window, 'addEventListener');
    const inspector = new ComponentInspector();
    inspector.startInspecting();
    expect(eventsSpy).toHaveBeenCalledTimes(6);
    expect(eventsSpy).toHaveBeenCalledWith('mouseover', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseout', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseenter', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseleave', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mousedown', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseup', jasmine.any(Function), true);
  });

  it('should remove event listeners from window on stop inspecting', () => {
    const eventsSpy = spyOn(window, 'removeEventListener');
    const inspector = new ComponentInspector();
    inspector.stopInspecting();
    expect(eventsSpy).toHaveBeenCalledTimes(6);
    expect(eventsSpy).toHaveBeenCalledWith('mouseover', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseout', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseenter', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseleave', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mousedown', jasmine.any(Function), true);
    expect(eventsSpy).toHaveBeenCalledWith('mouseup', jasmine.any(Function), true);
  });

  it('should cancel events from mouse after start inspecting', () => {
    const inspector = new ComponentInspector();
    const mouseEventSpy = jasmine.createSpyObj('e', ['stopImmediatePropagation', 'preventDefault']);
    inspector.startInspecting();
    inspector.cancelEvent(mouseEventSpy);
    expect(mouseEventSpy.stopImmediatePropagation).toHaveBeenCalledTimes(1);
    expect(mouseEventSpy.preventDefault).toHaveBeenCalledTimes(1);
  });
});
