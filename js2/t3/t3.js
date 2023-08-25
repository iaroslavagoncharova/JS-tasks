'use strict';

const numbers = [];

let number;

while (number != 'done') {
  number = prompt("Enter a number or 'done' if you want to stop");
  numbers.push(+number)
}

const evenNumbers = [];

for (const n of numbers) {
  if (n % 2 == 0) {
    evenNumbers.push(n)
  }
}

if (evenNumbers.length == 0) {
  document.getElementById('kohde').innerHTML = 'Even numbers: none'
}

else {
  document.getElementById('kohde').innerHTML = `Even numbers: ${evenNumbers}`
}

console.log('The program is finished')

