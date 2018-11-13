const cubeAndSumDigits = number => {
  var lengthNumber = number.toString().length
  let cubedAndSummedDigits = number.toString()
                                   .split('')
                                   .map(x => Math.pow(parseInt(x), lengthNumber))
                                   .reduce((x, y) => x + y);
  return cubedAndSummedDigits;
}

const validate = inputNumber => {
  if (inputNumber < 10) {
    return true;
  } else if (inputNumber > 10 && inputNumber < 100) {
    return false;
  } else if (cubeAndSumDigits(inputNumber) === inputNumber) {
    return true;
  }
  return false;
}

module.exports = {validate, cubeAndSumDigits}
