'use strict';

const numbers = [1, 15, 22, 4, 38, 90];

let newArray = sortNumbers(numbers);

function sortNumbers (numbers) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i])
  }
  newNumbers.sort((a, b) => a - b)
  return newNumbers
}

console.log(numbers)
console.log(newArray)

