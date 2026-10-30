const {
  capitalizeFirstLetter, reverseString, countVowels, truncateText, removeSpaces,
  sumArray, filterEvenNumbers, findMax, flattenArray, uniqueValues,
  printNumbers, calculateFactorial, generateMultiplicationTable, sumOfDigits, repeatString,
} = require('./tasks.js');

console.log('===== STRINGS =====');
console.log(capitalizeFirstLetter('привет'));
console.log(reverseString('abc'));
console.log(countVowels('Hello'));
console.log(truncateText('Очень длинная строка', 10));
console.log(removeSpaces('a b c'));

console.log('\n===== ARRAYS =====');
console.log(sumArray([1, 2, 3]));
console.log(filterEvenNumbers([1, 2, 3, 4]));
console.log(findMax([5, 9, 2, 7]));
console.log(flattenArray([[1, 2], [3, [4]]]));
console.log(uniqueValues([1, 2, 2, 3, 1]));

console.log('\n===== LOOPS =====');
console.log('printNumbers(5):');
printNumbers(5);

console.log('calculateFactorial(5):', calculateFactorial(5)); 

console.log('generateMultiplicationTable(3):');
generateMultiplicationTable(3);

console.log('sumOfDigits(123):', sumOfDigits(123));
console.log('repeatString("ab", 3):', repeatString('ab', 3));