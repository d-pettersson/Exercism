export default class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree
  }

  kind() {
    if ((this.sideOne || this.sideTwo || this.sideThree) === 0) {
      throw new Error('');
    } else if (this.sideOne < 0 || this.sideTwo < 0 || this.sideThree < 0) {
      throw new Error('');
    } else if ((this.sideOne + this.sideTwo < this.sideThree) || (this.sideOne + this.sideThree < this.sideTwo) || (this.sideTwo + this.sideThree < this.sideOne)) {
      throw new Error('');
    } else if ((this.sideOne === this.sideTwo) && (this.sideTwo === this.sideThree)) {
      return ('equilateral');
    } else if ((this.sideOne === this.sideTwo) || (this.sideOne === this.sideThree) || (this.sideTwo === this.sideThree)) {
      return ('isosceles');
    }
    return ('scalene');
  }
}
