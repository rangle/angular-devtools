var _a, _b, _c;
const versionElement = document.querySelector('[ng-version]');
const versionRe = /(\d+\.\d+\.\d+(-(next|rc)\.\d+)?)/;
const defaultVersion = '0.0.0';
let version = defaultVersion;
if (versionElement) {
    version = (_a = versionElement.getAttribute('ng-version')) !== null && _a !== void 0 ? _a : defaultVersion;
    version = (_c = ((_b = version.match(versionRe)) !== null && _b !== void 0 ? _b : [''])[0]) !== null && _c !== void 0 ? _c : defaultVersion;
}
export const VERSION = version;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzLWJhY2tlbmQvc3JjL2xpYi92ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlELE1BQU0sU0FBUyxHQUFHLG1DQUFtQyxDQUFDO0FBRXRELE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUMvQixJQUFJLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDN0IsSUFBSSxjQUFjLEVBQUU7SUFDbEIsT0FBTyxHQUFHLE1BQUEsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsbUNBQUksY0FBYyxDQUFDO0lBQ3RFLE9BQU8sR0FBRyxNQUFBLENBQUMsTUFBQSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxtQ0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFJLGNBQWMsQ0FBQztDQUNuRTtBQUVELE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2ZXJzaW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy12ZXJzaW9uXScpO1xuY29uc3QgdmVyc2lvblJlID0gLyhcXGQrXFwuXFxkK1xcLlxcZCsoLShuZXh0fHJjKVxcLlxcZCspPykvO1xuXG5jb25zdCBkZWZhdWx0VmVyc2lvbiA9ICcwLjAuMCc7XG5sZXQgdmVyc2lvbiA9IGRlZmF1bHRWZXJzaW9uO1xuaWYgKHZlcnNpb25FbGVtZW50KSB7XG4gIHZlcnNpb24gPSB2ZXJzaW9uRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25nLXZlcnNpb24nKSA/PyBkZWZhdWx0VmVyc2lvbjtcbiAgdmVyc2lvbiA9ICh2ZXJzaW9uLm1hdGNoKHZlcnNpb25SZSkgPz8gWycnXSlbMF0gPz8gZGVmYXVsdFZlcnNpb247XG59XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gdmVyc2lvbjtcbiJdfQ==