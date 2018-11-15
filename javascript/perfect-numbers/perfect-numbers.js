export const classify = number => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  };

  var factor = [];
  if (number === 1) {
    factor.push(0);
  } else {
    for (let i = 0; i < number; i++) {
      if (number % i === 0) {
        factor.push(i);
      }
    }
  };

  let summedFactors = factor.reduce((a, b) => a + b);
  if (summedFactors === number) {
    return('perfect');
  };
  if (summedFactors > number) {
    return('abundant');
  };
  if (summedFactors < number) {
    return('deficient');
  };
}
