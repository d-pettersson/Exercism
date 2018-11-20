export default function toRoman(number) {
  var result = '';
  var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i <= nums.length; i++) {
    while (number % nums[i] < number) {
      result += romanNums[i];
      number -= nums[i];
    }
  }
  return result;
}
