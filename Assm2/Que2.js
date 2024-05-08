function linearSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i; // Return the index if the element is found
    }
  }
  return -1; // Return -1 if the element is not found
}

// Example usage:
const array = [3, 7, 1, 4, 9, 2];
const elementToFind = 4;
const index = linearSearch(array, elementToFind);
if (index !== -1) {
  console.log(`The element ${elementToFind} is found at index ${index}.`);
} else {
  console.log(`The element ${elementToFind} is not found in the array.`);
}
