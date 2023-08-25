'use strict';

const number = +prompt('Anna positiivinen numero: ');
const table = document.createElement('table');

for (let i = 1; i <= number; i++) {
  const tr = document.createElement('tr');
  for (let j = 1; j <= number; j++) {
    const td = document.createElement('td');
    td.innerText = j * i;
    table.append(td);
  }
  table.append(tr);
}
  document.getElementById('kohde').append(table);
