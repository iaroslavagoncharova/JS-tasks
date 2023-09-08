// Sample clothes array
const clothes = [
  { type: "shirt", size: "M", color: "red" },
  { type: "pants", size: "L", color: "blue" },
  { type: "dress", size: "S", color: "red" }
];

// TODO: Implement the getRedClothes function
function getRedClothes(clothes) {
  // TODO: Use the filter function to get red clothing objects
  const newArray = clothes.filter(vaate => vaate.color === 'red');
  return newArray;
}

// Test the getRedClothes function
const redClothes = getRedClothes(clothes);
console.log(redClothes);

// Output should be:
// [ { type: 'shirt', size: 'M', color: 'red' },
//   { type: 'dress', size: 'S', color: 'red' } ]


// Sample expenses array
const expenses = [
  { category: "Food", amount: 50 },
  { category: "Transportation", amount: 30 },
  { category: "Entertainment", amount: 20 }
];

// TODO: Implement the calculateTotalExpenses function

// Test the calculateTotalExpenses function
const totalExpenses = expenses.reduce((total, expense) => expense.amount + total, 0);
console.log(totalExpenses);

// Output should be:
// 100
