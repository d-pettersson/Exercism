const translations = {
  G : 'C',
  C : 'G',
  T : 'A',
  A : 'U'
};

export function toRna(strand) {
  if (strand === '') {
    return ('');
  } else if (/G|C|T|A/g.test(strand)) {
    if (/X|U/g.test(strand)) {
      throw new Error ('Invalid input DNA.');
    } else {
      return strand.split('').map(translate).join('');
    }
  } else if (/X|U/g.test(strand)) {
      throw new Error ('Invalid input DNA.');
  }
};

const translate = nucleotides => {
  return translations[nucleotides]
}
