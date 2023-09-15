interface Item {
    name: string;
    price: number;
    quantity: number;
}

const cart: Item[] = [];

while (true) {
  const itemName = prompt('Give the name: ')!;

  if (itemName === "") {
    break;
  }

  const itemPrice = +prompt('Give the price: ')!;
  const itemQuantity = +prompt('Give the quantity: ')!;

  const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
  cart.push(newItem);
}

const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
