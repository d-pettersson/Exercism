export const isPangram = sentence => {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  sentence = sentence.toLowerCase();

// check one by one the characters vs the alphabet

  for (let char = 0; char < alphabet.length; char++) {
    if ( !sentence.includes(alphabet[char])) {
      return false;
      }
    };
  return true;
}
