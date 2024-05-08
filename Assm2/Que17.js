function splitStringIntoWords(str) {
  // Split the string into an array of words using whitespace as the delimiter
  return str.split(/\s+/);
}

// Example usage:
const sentence = "This is an example sentence.";
const wordsArray = splitStringIntoWords(sentence);
console.log(wordsArray);
