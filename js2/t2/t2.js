'use strict';

const numbers = [];

for (let i = 1; i <= 5; i++) {
  let number = +prompt(`Enter a number ${i}`);
  numbers.push(number)
}

document.getElementById('numbers').innerHTML = `Numbers: [${numbers}]`;

const search = +prompt('Enter a number to search: ');

const found = numbers.includes(search)
if (found) {
  document.getElementById('found').innerHTML = `Number ${search} is found in the array`
}
else {
  document.getElementById('found').innerHTML = `Number ${search} is not found in the array`
}

numbers.pop([numbers.length - 1]);
document.getElementById('updated').innerHTML = `Updated numbers: [${numbers}]`;

function sortNumbers(a, b) {
  const sorting = b - a;
  return sorting;
}

numbers.sort(sortNumbers);
document.getElementById('sorted').innerHTML = `Sorted numbers: [${numbers}]`





