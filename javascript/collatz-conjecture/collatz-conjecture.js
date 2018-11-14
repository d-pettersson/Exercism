export const steps = n => {
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed')
  };
  if (n === 1) {
    return 0
  }
  if (n > 1) {
    n = parseInt(n);
    var countN = 0;
     do {
      if (n % 2 === 0) {
        countN++;
        n = n / 2;
      } else {
        countN++;
        n = (n * 3) + 1;
      }
    } while (n !== 1);
    return countN;
  }
}
