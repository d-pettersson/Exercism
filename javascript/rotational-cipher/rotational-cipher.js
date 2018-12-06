export var RotationalCipher = {

  rotate(stringToEncode, key) {
    let encodedDigits = [];
    let encodedLetters = '';
    let len = stringToEncode.length;
    let loopKey = key % 26;

    for (let i = 0; i <= len; i++) {
      encodedDigits.push((stringToEncode.charCodeAt(i) + loopKey));
      if (encodedDigits[i] > 65) {
        encodedDigits[i] = (encodedDigits[i] - 65) % 26 + 65;
      } else if (encodedDigits[i] > 122) {
        encodedDigits[i] = (encodedDigits[i] - 97) % 26 + 97;
      }
      if (encodedDigits[i] !== 32 + loopKey) {
        encodedLetters += String.fromCharCode(encodedDigits[i]);
      }
      encodedLetters += ' ';
    };
    return encodedLetters.replace(/\s(?!\s)/g, '');
  }
}
