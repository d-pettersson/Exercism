export const solve = (x, y) => {
  if ((x >= 0 && x < 1) && (y >= 0 && y < 1)) {
    return 10;
  } else if ((x >= 0 && x <= 5) && (y >= 0 && y <= 5)) {
    return 5;
  } else if ((x >=0 && x <= 10) && (y >= 0 && y <= 10)) {
    return 1;
  } else if (x > 10 || y > 10){
    return 0;
  } else if (arguments.length > 2) {
    return null;
  }
}
