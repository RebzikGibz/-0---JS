function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  for (const ch of str.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

function truncateText(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

function removeSpaces(str) {
  return str.replace(/\s/g, '');
}


function sumArray(arr) {
  let sum = 0;
  for (const n of arr) sum += n;
  return sum;
}

function filterEvenNumbers(arr) {
  return arr.filter(n => n % 2 === 0);
}

function findMax(arr) {
  let max = arr[0];
  for (const n of arr) if (n > max) max = n;
  return max;
}

function flattenArray(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) result.push(...item);
    else result.push(item);
  }
  return result;
}

function uniqueValues(arr) {
  const result = [];
  for (const item of arr) if (!result.includes(item)) result.push(item);
  return result;
}


function printNumbers(n) {
  for (let i = 1; i <= n; i++) console.log(i);
}

function calculateFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}

function generateMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) console.log(`${n} * ${i} = ${n * i}`);
}

function sumOfDigits(num) {
  let sum = 0;
  let n = Math.abs(num);
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function repeatString(str, count) {
  let result = '';
  for (let i = 0; i < count; i++) result += str;
  return result;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    capitalizeFirstLetter, reverseString, countVowels, truncateText, removeSpaces,
    sumArray, filterEvenNumbers, findMax, flattenArray, uniqueValues,
    printNumbers, calculateFactorial, generateMultiplicationTable, sumOfDigits, repeatString,
  };
}