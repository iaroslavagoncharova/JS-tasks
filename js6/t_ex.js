const userArray = [
  { name: "Alice", age: 25 },
  { name: "Bob" },
  { age: 30 },
  { name: "Eve", age: null }
];

for (const user of userArray) {
  const userData = `Welcome, ${user.name ?? 'Guest'}! You are ${
    user.age ?? 18
  } years old.`;
  console.log(userData);
}


/* Sample user data array
const userArray = [
  { name: "Alice", age: 25 },
  { name: "Bob" },
  { age: 30 },
  { name: "Eve", age: null }
];

// Function to process user data
function processUserData(user) {
  // TODO: Use a suitable operator to get the 'name' property or set a default value 'Guest'
  const name = user.name ?? 'Guest';

  // TODO: Use a suitable operator to get the 'age' property or set a default value '18'
  const age = user.age ?? 18;

  const outputMessage = `Welcome, ${name}! You are ${age} years old.`;

  return outputMessage;
}

// Test the processUserData function with different user data
for (const user of userArray) {
  console.log(processUserData(user));
}

// The correct output should be:
// Welcome, Alice! You are 25 years old.
// Welcome, Bob! You are 18 years old.
// Welcome, Guest! You are 30 years old.
// Welcome, Eve! You are 18 years old.*/

const taulukko = [1, 2, 3];

const [first, second, third] = taulukko;

console.log(second, third, first);
