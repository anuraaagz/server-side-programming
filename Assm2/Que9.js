function isArraySorted(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Array is not sorted
    }
  }
  return true; // Array is sorted
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 3, 2, 1, 4];

console.log("Is sortedArray sorted?", isArraySorted(sortedArray));
console.log("Is unsortedArray sorted?", isArraySorted(unsortedArray));
