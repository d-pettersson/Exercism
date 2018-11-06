export const toRna = adn => {
  if (adn === '') {
    return '';
  } else {
    adn.split("").map(function(char) {
      if (char === 'G') {
        return 'C';
      } else if (char === 'C') {
        return 'G';
      } else if (char === 'T') {
        return 'A';
      } else if (char === 'A') {
        return 'U';
      }
    }.join(""))
  }
};
