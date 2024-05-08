class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Peek at the top element of the stack without removing it
  peek() {
    return !this.isEmpty()
      ? this.items[this.items.length - 1]
      : "Stack is empty";
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Check if an element is present in the stack
  contains(element) {
    return this.items.includes(element);
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Is 2 present in the stack?", stack.contains(2)); // true
console.log("Is 5 present in the stack?", stack.contains(5)); // false
