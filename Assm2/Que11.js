function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// Example usage:
const value1 = 10;
const value2 = "hello";

console.log("Is value1 a number?", isNumber(value1)); // true
console.log("Is value2 a number?", isNumber(value2)); // false
