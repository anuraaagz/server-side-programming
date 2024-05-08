class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate rectangle area
  calculateArea() {
    return this.width * this.height;
  }

  // Method to calculate rectangle perimeter
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Example usage:
const rectangle = new Rectangle(5, 7); // Creating an instance of the Rectangle class with width 5 and height 7

// Calculating area and perimeter
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log("Area of the rectangle:", area);
console.log("Perimeter of the rectangle:", perimeter);
