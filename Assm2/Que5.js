function heapSort(arr) {
  // Build heap (rearrange array)
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  // One by one extract an element from heap
  for (let i = arr.length - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

// To heapify a subtree rooted with node i which is an index in arr[]. n is size of heap
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example usage:
const unsortedArray = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray = heapSort(unsortedArray);
console.log("Sorted array:", sortedArray);
