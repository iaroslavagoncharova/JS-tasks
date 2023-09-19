function lengthOrSquare(value: number | string) {
    if (typeof value === 'number') {
        return value * value;
    }
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return 'Invalid input';
    }
}

const userInput  = prompt('Enter a number or a string: ');
let parsedValue : string | number = 'Invalid output';

if (userInput !== null) {
  const value = parseFloat(userInput);
  if (!isNaN(value)) {
    parsedValue = value;
  }
  else {
    parsedValue = userInput;
  }
}

const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
