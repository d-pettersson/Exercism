export const isIsogram = sentence => {
  var countLetters = sentence.split('').reduce(function(allLetters, letter) {
    if (letter in allLetters) {
      allLetters[letter]++
    } else {
      allLetters[letter] = 1;
      return allLetters;
    }
  }, {})
  if (sentence === '') {
    return true;
  } else if (Object.values(countLetters).reduce((a, b) => a + b) > sentence.length) {
    return false;
  }
}
