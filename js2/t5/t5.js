'use script';

const numbers = [1, 13, 22, 6, 81, 3]

function sortArray(numbers, order) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i])
  }
  if (order == 'asc') {
    newNumbers.sort((a, b) => a - b)
  }
  if (order == 'desc') {
    newNumbers.sort((a, b) => b - a)
  }
  return newNumbers
}

console.log(sortArray(numbers, 'desc'));

console.log(sortArray(numbers, 'asc'))

