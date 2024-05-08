function swapCase(str) {
  let swappedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      swappedStr += char.toLowerCase();
    } else {
      swappedStr += char.toUpperCase();
    }
  }
  return swappedStr;
}

// Example usage:
const inputString = "Hello World";
const swappedString = swapCase(inputString);
console.log(swappedString);
