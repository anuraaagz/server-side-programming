function isRegExp(value) {
  return value instanceof RegExp;
}

// Example usage:
const regex1 = /[a-z]/;
const regex2 = new RegExp("\\d+");

console.log("Is regex1 a RegExp?", isRegExp(regex1)); // true
console.log("Is regex2 a RegExp?", isRegExp(regex2)); // true
console.log("Is 'hello' a RegExp?", isRegExp("hello")); // false
