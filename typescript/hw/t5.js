function lengthOrSquare(value) {
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
var userInput = prompt('Enter a number or a string: ');
var parsedValue = 'Invalid output';
if (userInput !== null) {
    var value = parseFloat(userInput);
    if (!isNaN(value)) {
        parsedValue = value;
    }
    else {
        parsedValue = userInput;
    }
}
var result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
