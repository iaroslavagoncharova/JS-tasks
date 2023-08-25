'use strict';

const score = +prompt('Anna pisteet: ');

if (score >= 0 && score <= 39) {
  document.getElementById('kohde').innerHTML = 'Arvosana on 0';
}

else if (score >= 40 && score <= 51) {
  document.getElementById('kohde').innerHTML = 'Arvosana on 1';
}

else if (score >= 52 && score <= 63) {
  document.getElementById('kohde').innerHTML = 'Arvosana on 2';
}

else if (score >= 64 && score <= 75) {
  document.getElementById('kohde').innerHTML = 'Arvosana on 3';
}

else if (score >= 76 && score <= 87) {
  document.getElementById('kohde').innerHTML = 'Arvosana on 4';
}

else if(score >= 88 && score <= 100) {
  document.getElementById('kohde').innerHTML = 'Arvosana on 5';
}


