"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    move(x, y) {
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
exports.Rectangle = Rectangle;
