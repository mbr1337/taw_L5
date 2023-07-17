class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

class Rectangle {
  topLeft: Point;
  topRight: Point;
  bottomLeft: Point;
  bottomRight: Point;

  constructor(
    topLeft: Point,
    topRight: Point,
    bottomLeft: Point,
    bottomRight: Point
  ) {
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }

  move(x: number, y: number) {
    this.topLeft.move(x, y);
    this.topRight.move(x, y);
    this.bottomLeft.move(x, y);
    this.bottomRight.move(x, y);
  }

  getArea() {
    const width = this.topRight.x - this.topLeft.x;
    const height = this.bottomLeft.y - this.topLeft.y;
    return width * height;
  }
}

export { Point, Rectangle };
