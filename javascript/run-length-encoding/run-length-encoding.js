export const encode = stringToEncode => {
  // find and create an array with the recurrent letters
  let similarLetters = stringToEncode.match(/(.)\1*/g);
  var numLetter = [];
  var initials = [];
  var result = [];

  for (let i = 0; i < similarLetters.length; i++) {
    numLetter.push(similarLetters[i].length);
    initials.push(similarLetters[i].slice(0, 1));
    if (similarLetters[i].length > 1) {
      result.push(numLetter[i]);
    }
    result.push(initials[i]);
  }
  return result.join('');
}

export const decode = stringToDecode => {
  let individualGroup = stringToDecode.match(/(\d)+\w|\w/g);
  let digitFollowedByLetter = stringToDecode.match(/(\d)+\w/g);
  let individualDigits = stringToDecode.match(/(\d)+/g).map(x => parseInt(x));
  let individualLetter = stringToDecode.match(/[A-Za-z]/g);
  let multipliedLetters = [];

  for (let i = 0; i <= individualGroup.length; i++) {
    if (individualDigits[i] !== '') {
      for (let j = 0; i <= individualDigits[i]; j++) {
        multipliedLetters.push(individualLetter[j])
      }
    } multipliedLetters.push(individualLetter[i]);  
  }
  return multipliedLetters;
}
