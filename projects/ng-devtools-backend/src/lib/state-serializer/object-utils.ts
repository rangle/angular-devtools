// Intentionally do not include the prototype because it contains
// inherited methods (hasOwnProperty, etc.). Also ignore symbols
// because it is tricky to pass a path to a symbol.
//
// We'd have to go through a serialization and deserialization logic
// which will add unnecessary complexity.
export const getKeys = (obj: {}): string[] => {
  if (!obj) {
    return [];
  }
  return Object.getOwnPropertyNames(obj);
};
