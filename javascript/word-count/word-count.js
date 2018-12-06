export default class Word {
  constructor(string) {
    this.string = string;
  }

  count(str) {
    let splitString = str.toLowerCase()
                         .replace(/\n|\t/, ' ')
                         .replace(/^\s*/, '')
                         .replace(/\s*$/, '')
                         .split(' ');
    let count = {};
    let filteredCount = {};
    filteredCount = splitString.filter(x => x.length > 0).forEach(function(x) {count[x] = (count[x] | 0) + 1})

    return count;
  }
}
