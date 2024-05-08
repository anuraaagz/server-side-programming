function findWordIndices(str, word) {
  const indices = [];
  let index = -1;

  while ((index = str.indexOf(word, index + 1)) !== -1) {
    indices.push(index);
  }

  return indices;
}

// Example usage:
const sentence = "This is an example sentence with example words.";
const wordToFind = "example";
const indices = findWordIndices(sentence, wordToFind);
console.log(`Indices of "${wordToFind}" in the sentence:`, indices);
