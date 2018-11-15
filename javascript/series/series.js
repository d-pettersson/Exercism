export default class Series9 {
  constructor(digits){
    this.digits = digits.split('').map(x => parseInt(x));
  }

  slices(size) {
    let newArray = [];
    for (let i = 0; i < this.digits.length; i++) {
      for (let j = 0; j < this.size; j++) {
        newArray = this.digits[j]
        return newArray[j];
      }
    }
  }
}
