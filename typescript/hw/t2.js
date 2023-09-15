// TODO: Implement the squareRoot function
// parameter num should be a number or null or undefined and the function shoud return a number or a string
function squareRoot(num) {
    if (typeof num === undefined || typeof num === null) {
        return 'Input is undefined or null.';
    }
    if (typeof num !== 'number' || isNaN(num)) {
        return 'Invalid input. Please enter a valid number.';
    }
    if (num < 0) {
        return 'Cannot calculate square root of a negative number.';
    }
    // Calculate the square root and return the result
    var sqrt = Math.sqrt(num);
    return sqrt;
}
// Prompt the user to enter a number
var userInput = prompt('Give a number: ');
var numberInput = userInput ? parseFloat(userInput) : undefined;
var result = squareRoot(numberInput);
console.log(result);
