'use strict';

const x1 = parseInt(prompt("Anna x1: "));
const y1 = parseInt(prompt("Anna y1: "));
const x2 = parseInt(prompt("Anna x2: "));
const y2 = parseInt(prompt("Anna y2: "));

const result = Math.round(Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)).toFixed(2);
console.log(result);
document.getElementById("kohde").innerHTML = result;
