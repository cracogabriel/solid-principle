class Rectangle {
  width: number;
  height: number;

  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width: number) {
    this.width = width;
    this.height = width; // Violates LSP
  }

  setHeight(height: number) {
    this.width = height; // Violates LSP
    this.height = height;
  }
}

export const runLiskovSubstitution = () => {
  let rectangle: Rectangle = new Square();
  rectangle.setWidth(5);
  rectangle.setHeight(4);
  console.log(rectangle.getArea()); // Outputs 25, but we expected 20
};
