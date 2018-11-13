export default class Raindrops {
  constructor(number) {
    this.number = number;
  }

  convert(value) {
    let stringAdder = '';
    if (value % 3 === 0) {
      stringAdder += 'Pling';
    }
    if (value % 5 === 0) {
      stringAdder += 'Plang';
    }
    if (value % 7 === 0) {
      stringAdder += 'Plong';
    }
    return stringAdder === '' ? value.toString() : stringAdder;
  }
}
