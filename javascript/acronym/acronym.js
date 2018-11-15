export const parse = sentence => {
  /* match any initials of a word or uppercase letters,
  that are not preceded by white space, 
  another uppercase letter or any non alphabetical character */
  let initials = sentence.match(/\b\w|[A-Z](?!\s|[A-Z]|\W)/g);
  return initials.join('').toUpperCase();
}
