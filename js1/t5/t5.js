'use strict';

const number = +prompt('Anna positiivinen numero: ');
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
};

document.getElementById('kohde').innerHTML = `Summa on ${sum}`
