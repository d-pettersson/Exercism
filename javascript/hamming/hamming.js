export const compute = (strandOne, strandTwo) => {
  if (strandOne.length !== strandTwo.length ) {
    throw new Error('left and right strands must be of equal length');
  }
  let count = 0
  for (let i = 0; i < strandOne.length; i++) {
    if (strandOne[i] !== strandTwo[i]) {
      count += 1;
    }
  }
  return count;
};
