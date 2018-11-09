/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  const questionMark = message.trim().endsWith('?');
  const isUpperCase = () => {
    if (/[A-Z]/gi.test(message)) {
    return message === message.toUpperCase();
    }
  };
  const notOnlyWhiteSpaces = message.replace(/\s/gi, '').length;


  if (isUpperCase() && !questionMark && notOnlyWhiteSpaces) {
    return 'Whoa, chill out!';
  } else if (!isUpperCase() && questionMark && notOnlyWhiteSpaces) {
    return 'Sure.';
  } else if (isUpperCase() && questionMark && notOnlyWhiteSpaces) {
    return 'Calm down, I know what I\'m doing!';
  } else if (!notOnlyWhiteSpaces) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};
