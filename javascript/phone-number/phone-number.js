export default class PhoneNumber {
  constructor(digits) {
    this.digits = digits;
  }
  
  number() {
    let cleanNumber = this.digits.replace(/[^\d]/g, '');

    if (cleanNumber.length > 9 && cleanNumber.length < 12) {
      if (!cleanNumber.startsWith('1') && cleanNumber.length == 11) {
        return null;
      } else if ((cleanNumber.startsWith('1') | cleanNumber.startsWith('0')) && cleanNumber.length == 10) {
        return null;
      } else if (cleanNumber[3] === '0' | cleanNumber[3] === '1') {
        return null;
      } else if ((cleanNumber[1] === '0' | cleanNumber[1] === '1') | (cleanNumber[4] === '0' | cleanNumber[4] === '1')) {
        return null;
      }
    return cleanNumber.length === 11 ? cleanNumber.replace(/[1]/, '') : cleanNumber;
    }
  return null;
  }
}
