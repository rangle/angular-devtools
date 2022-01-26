export var PropType;
(function (PropType) {
    PropType[PropType["Number"] = 0] = "Number";
    PropType[PropType["String"] = 1] = "String";
    PropType[PropType["Null"] = 2] = "Null";
    PropType[PropType["Undefined"] = 3] = "Undefined";
    PropType[PropType["Symbol"] = 4] = "Symbol";
    PropType[PropType["HTMLNode"] = 5] = "HTMLNode";
    PropType[PropType["Boolean"] = 6] = "Boolean";
    PropType[PropType["BigInt"] = 7] = "BigInt";
    PropType[PropType["Function"] = 8] = "Function";
    PropType[PropType["Object"] = 9] = "Object";
    PropType[PropType["Date"] = 10] = "Date";
    PropType[PropType["Array"] = 11] = "Array";
    PropType[PropType["Unknown"] = 12] = "Unknown";
})(PropType || (PropType = {}));
export var PropertyQueryTypes;
(function (PropertyQueryTypes) {
    PropertyQueryTypes[PropertyQueryTypes["All"] = 0] = "All";
    PropertyQueryTypes[PropertyQueryTypes["Specified"] = 1] = "Specified";
})(PropertyQueryTypes || (PropertyQueryTypes = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm90b2NvbC9zcmMvbGliL21lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQSxNQUFNLENBQU4sSUFBWSxRQWNYO0FBZEQsV0FBWSxRQUFRO0lBQ2xCLDJDQUFNLENBQUE7SUFDTiwyQ0FBTSxDQUFBO0lBQ04sdUNBQUksQ0FBQTtJQUNKLGlEQUFTLENBQUE7SUFDVCwyQ0FBTSxDQUFBO0lBQ04sK0NBQVEsQ0FBQTtJQUNSLDZDQUFPLENBQUE7SUFDUCwyQ0FBTSxDQUFBO0lBQ04sK0NBQVEsQ0FBQTtJQUNSLDJDQUFNLENBQUE7SUFDTix3Q0FBSSxDQUFBO0lBQ0osMENBQUssQ0FBQTtJQUNMLDhDQUFPLENBQUE7QUFDVCxDQUFDLEVBZFcsUUFBUSxLQUFSLFFBQVEsUUFjbkI7QUEwQ0QsTUFBTSxDQUFOLElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1Qix5REFBRyxDQUFBO0lBQ0gscUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RpdmVUeXBlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFR5cGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzRWxlbWVudDogYm9vbGVhbjtcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZUb29sc05vZGU8RGlyVHlwZSA9IERpcmVjdGl2ZVR5cGUsIENtcFR5cGUgPSBDb21wb25lbnRUeXBlPiB7XG4gIGVsZW1lbnQ6IHN0cmluZztcbiAgZGlyZWN0aXZlczogRGlyVHlwZVtdO1xuICBjb21wb25lbnQ6IENtcFR5cGUgfCBudWxsO1xuICBjaGlsZHJlbjogRGV2VG9vbHNOb2RlPERpclR5cGUsIENtcFR5cGU+W107XG4gIG5hdGl2ZUVsZW1lbnQ/OiBOb2RlO1xufVxuXG5leHBvcnQgZW51bSBQcm9wVHlwZSB7XG4gIE51bWJlcixcbiAgU3RyaW5nLFxuICBOdWxsLFxuICBVbmRlZmluZWQsXG4gIFN5bWJvbCxcbiAgSFRNTE5vZGUsXG4gIEJvb2xlYW4sXG4gIEJpZ0ludCxcbiAgRnVuY3Rpb24sXG4gIE9iamVjdCxcbiAgRGF0ZSxcbiAgQXJyYXksXG4gIFVua25vd24sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvciB7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG4gIHZhbHVlPzogYW55O1xuICBlZGl0YWJsZTogYm9vbGVhbjtcbiAgdHlwZTogUHJvcFR5cGU7XG4gIHByZXZpZXc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RpdmVzUHJvcGVydGllcyB7XG4gIFtuYW1lOiBzdHJpbmddOiBQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZU1ldGFkYXRhIHtcbiAgaW5wdXRzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgb3V0cHV0czogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uO1xuICBvblB1c2g6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydGllcyB7XG4gIHByb3BzOiB7IFtuYW1lOiBzdHJpbmddOiBEZXNjcmlwdG9yIH07XG4gIG1ldGFkYXRhPzogRGlyZWN0aXZlTWV0YWRhdGE7XG59XG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRQb3NpdGlvbiA9IG51bWJlcltdO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZVBvc2l0aW9uIHtcbiAgZWxlbWVudDogRWxlbWVudFBvc2l0aW9uO1xuICBkaXJlY3RpdmU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmVzdGVkUHJvcCB7XG4gIG5hbWU6IHN0cmluZyB8IG51bWJlcjtcbiAgY2hpbGRyZW46IE5lc3RlZFByb3BbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRFeHBsb3JlclZpZXdQcm9wZXJ0aWVzIHtcbiAgW2RpcmVjdGl2ZTogc3RyaW5nXTogTmVzdGVkUHJvcFtdO1xufVxuXG5leHBvcnQgZW51bSBQcm9wZXJ0eVF1ZXJ5VHlwZXMge1xuICBBbGwsXG4gIFNwZWNpZmllZCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGxQcm9wZXJ0aWVzUXVlcnkge1xuICB0eXBlOiBQcm9wZXJ0eVF1ZXJ5VHlwZXMuQWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGVkUHJvcGVydGllc1F1ZXJ5IHtcbiAgdHlwZTogUHJvcGVydHlRdWVyeVR5cGVzLlNwZWNpZmllZDtcbiAgcHJvcGVydGllczogQ29tcG9uZW50RXhwbG9yZXJWaWV3UHJvcGVydGllcztcbn1cblxuZXhwb3J0IHR5cGUgUHJvcGVydHlRdWVyeSA9IEFsbFByb3BlcnRpZXNRdWVyeSB8IFNlbGVjdGVkUHJvcGVydGllc1F1ZXJ5O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEV4cGxvcmVyVmlld1F1ZXJ5IHtcbiAgc2VsZWN0ZWRFbGVtZW50OiBFbGVtZW50UG9zaXRpb247XG4gIHByb3BlcnR5UXVlcnk6IFByb3BlcnR5UXVlcnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50RXhwbG9yZXJWaWV3IHtcbiAgZm9yZXN0OiBEZXZUb29sc05vZGVbXTtcbiAgcHJvcGVydGllcz86IERpcmVjdGl2ZXNQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpZmVjeWNsZVByb2ZpbGUge1xuICBuZ09uSW5pdD86IG51bWJlcjtcbiAgbmdPbkRlc3Ryb3k/OiBudW1iZXI7XG4gIG5nT25DaGFuZ2VzPzogbnVtYmVyO1xuICBuZ0RvQ2hlY2s/OiBudW1iZXI7XG4gIG5nQWZ0ZXJDb250ZW50SW5pdD86IG51bWJlcjtcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkPzogbnVtYmVyO1xuICBuZ0FmdGVyVmlld0luaXQ/OiBudW1iZXI7XG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RpdmVQcm9maWxlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpc0VsZW1lbnQ6IGJvb2xlYW47XG4gIGlzQ29tcG9uZW50OiBib29sZWFuO1xuICBsaWZlY3ljbGU6IExpZmVjeWNsZVByb2ZpbGU7XG4gIGNoYW5nZURldGVjdGlvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50UHJvZmlsZSB7XG4gIGRpcmVjdGl2ZXM6IERpcmVjdGl2ZVByb2ZpbGVbXTtcbiAgY2hpbGRyZW46IEVsZW1lbnRQcm9maWxlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZXJGcmFtZSB7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBkaXJlY3RpdmVzOiBFbGVtZW50UHJvZmlsZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZWRTdGF0ZURhdGEge1xuICBkaXJlY3RpdmVJZDogRGlyZWN0aXZlUG9zaXRpb247XG4gIGtleVBhdGg6IHN0cmluZ1tdO1xuICBuZXdWYWx1ZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBoYXNoOiBzdHJpbmcgfCBudWxsO1xuICBwYXRoOiBzdHJpbmc7XG4gIHNwZWNpZmljaXR5OiBzdHJpbmcgfCBudWxsO1xuICBoYW5kbGVyOiBzdHJpbmc7XG4gIGRhdGE6IGFueTtcbiAgY2hpbGRyZW4/OiBBcnJheTxSb3V0ZT47XG4gIGlzQXV4OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBUb3BpYyA9IGtleW9mIEV2ZW50cztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudHMge1xuICBoYW5kc2hha2U6ICgpID0+IHZvaWQ7XG4gIHNodXRkb3duOiAoKSA9PiB2b2lkO1xuICBxdWVyeU5nQXZhaWxhYmlsaXR5OiAoKSA9PiB2b2lkO1xuICBuZ0F2YWlsYWJpbGl0eTogKGNvbmZpZzogeyB2ZXJzaW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBib29sZWFuOyBkZXZNb2RlOiBib29sZWFuOyBpdnk6IGJvb2xlYW4gfSkgPT4gdm9pZDtcblxuICBpbnNwZWN0b3JTdGFydDogKCkgPT4gdm9pZDtcbiAgaW5zcGVjdG9yRW5kOiAoKSA9PiB2b2lkO1xuXG4gIGdldE5lc3RlZFByb3BlcnRpZXM6IChwb3NpdGlvbjogRGlyZWN0aXZlUG9zaXRpb24sIHBhdGg6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBuZXN0ZWRQcm9wZXJ0aWVzOiAocG9zaXRpb246IERpcmVjdGl2ZVBvc2l0aW9uLCBkYXRhOiBQcm9wZXJ0aWVzLCBwYXRoOiBzdHJpbmdbXSkgPT4gdm9pZDtcblxuICBzZXRTZWxlY3RlZENvbXBvbmVudDogKHBvc2l0aW9uOiBFbGVtZW50UG9zaXRpb24pID0+IHZvaWQ7XG4gIGdldFJvdXRlczogKCkgPT4gdm9pZDtcbiAgdXBkYXRlUm91dGVyVHJlZTogKHJvdXRlczogUm91dGVbXSkgPT4gdm9pZDtcblxuICBjb21wb25lbnRUcmVlRGlydHk6ICgpID0+IHZvaWQ7XG4gIGdldExhdGVzdENvbXBvbmVudEV4cGxvcmVyVmlldzogKHF1ZXJ5PzogQ29tcG9uZW50RXhwbG9yZXJWaWV3UXVlcnkpID0+IHZvaWQ7XG4gIGxhdGVzdENvbXBvbmVudEV4cGxvcmVyVmlldzogKHZpZXc6IENvbXBvbmVudEV4cGxvcmVyVmlldykgPT4gdm9pZDtcblxuICB1cGRhdGVTdGF0ZTogKHZhbHVlOiBVcGRhdGVkU3RhdGVEYXRhKSA9PiB2b2lkO1xuXG4gIHN0YXJ0UHJvZmlsaW5nOiAoKSA9PiB2b2lkO1xuICBzdG9wUHJvZmlsaW5nOiAoKSA9PiB2b2lkO1xuICBzZW5kUHJvZmlsZXJDaHVuazogKHJlc3VsdHM6IFByb2ZpbGVyRnJhbWUpID0+IHZvaWQ7XG4gIHByb2ZpbGVyUmVzdWx0czogKHJlc3VsdHM6IFByb2ZpbGVyRnJhbWUpID0+IHZvaWQ7XG5cbiAgY3JlYXRlSGlnaGxpZ2h0T3ZlcmxheTogKHBvc2l0aW9uOiBFbGVtZW50UG9zaXRpb24pID0+IHZvaWQ7XG4gIHJlbW92ZUhpZ2hsaWdodE92ZXJsYXk6ICgpID0+IHZvaWQ7XG5cbiAgaGlnaGxpZ2h0Q29tcG9uZW50OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgc2VsZWN0Q29tcG9uZW50OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgcmVtb3ZlQ29tcG9uZW50SGlnaGxpZ2h0OiAoKSA9PiB2b2lkO1xuXG4gIGVuYWJsZVRpbWluZ0FQSTogKCkgPT4gdm9pZDtcbiAgZGlzYWJsZVRpbWluZ0FQSTogKCkgPT4gdm9pZDtcbn1cbiJdfQ==