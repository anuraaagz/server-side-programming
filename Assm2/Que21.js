class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to check if the linked list is empty
  isEmpty() {
    return this.head === null;
  }
}

// Example usage:
const linkedList = new LinkedList();
console.log("Is linked list empty?", linkedList.isEmpty()); // true

linkedList.head = new Node(1); // Adding a node to the linked list
console.log("Is linked list empty?", linkedList.isEmpty()); // false
