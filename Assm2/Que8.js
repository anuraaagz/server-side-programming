function sortStringAlphabetically(str) {
  // Split the string into an array of characters, sort them, and then join them back into a string
  return str.split("").sort().join("");
}

// Example usage:
const unsortedString = "hello world";
const sortedString = sortStringAlphabetically(unsortedString);
console.log("Sorted string:", sortedString);
