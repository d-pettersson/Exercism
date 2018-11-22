var dictionary = {
  AUG:'Methionine',
  UUU:'Phenylalanine',
  UUC:'Phenylalanine',
  UUA:'Leucine',
  UUG:'Leucine',
  UCU:'Serine',
  UCC:'Serine',
  UCA:'Serine',
  UCG:'Serine',
  UAU:'Tyrosine',
  UAC:'Tyrosine',
  UGU:'Cysteine',
  UGC:'Cysteine',
  UGG:'Tryptophan',
  UAA:'STOP',
  UAG:'STOP',
  UGA:'STOP'
}

export default function translate(string) {
  let translated = [];
  if (string === undefined) {
    return translated;
  }
  if (!/A|C|G|U/.test(string)) {
    throw new Error('Invalid codon');
  }

  let arrayRNA = string.match(/(.){3}/g);

  for (let i = 0; i <= arrayRNA.length; i++) {
    translated.push(dictionary[arrayRNA[i]]);
    if (translated.includes('STOP')) {
      break;
    }
  }

  return translated.filter(x => x !== undefined)
                   .filter(x => x !== 'STOP');
}
