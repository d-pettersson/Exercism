export default class Squares {
  constructor(number) {
    this.number = number
  }

  get arrayOfDigits() {
    let digits = [];
    for (let i = 1; i <= this.number; i++) {
      digits.push(i);
    }
    return digits;
  }

  get squareOfSum() {
    return Math.pow(this.arrayOfDigits.reduce((a, b) => a + b), 2);
  }

  get sumOfSquares() {
    return this.arrayOfDigits.map(x => Math.pow(x, 2)).reduce((a, b) => a + b);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
