function bubbleSort(arr) {
  const length = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Example usage:
const unsortedArray = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
