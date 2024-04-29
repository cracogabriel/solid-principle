interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

export const runLiskovSubstitution = () => {
  let rectangle: Shape = new Rectangle(5, 4);
  console.log(rectangle.getArea());

  let square: Shape = new Square(5);
  console.log(square.getArea());
};
