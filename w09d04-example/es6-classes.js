class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calcArea() {
        return this.length * this.width;
    }

    get area() {
        return this.calcArea();
    }
}

const twoByTwo = new Rectangle(2, 2);

console.log(twoByTwo);
console.log('area is:', twoByTwo.calcArea());
console.log('area is:', twoByTwo.area);
