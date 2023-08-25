/*Write a program that prompts the user to enter the lengths of three sides of a triangle and determines
the type of triangle based on the side lengths. The program should classify the triangle as equilateral (all sides are equal),
isosceles (two sides are equal), or scalene (no sides are equal). Print the result on the HTML document.*/
'use strict';
const s1 = +prompt("Anna kolmion ensimmäisen sivun pituus: ");
const s2 = +prompt("Anna kolmion toisen sivun pituus: ");
const s3 = +prompt("Anna kolmion kolmanannen sivun pituus: ");
let tulos = ' ';

if (s1 === s2 && s2 === s3) {
    tulos = ('tasasivuinen kolmio');
  }

else if (s1 === s2 || s3 === s1 || s2 === s3) {
    tulos = ('tasakylkinen kolmio');
    }

else if (s1 !== s2 && s3 !== s1 && s3 !== s2) {
    tulos = ('epäsäännöllinen kolmio');
    }

document.getElementById('kohde').insertAdjacentHTML('beforeend', tulos);
