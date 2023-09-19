export {}; // hack to ignore Book from task 3

type ElectronicDevice = {
    brand: string;
    model : string;
    type: 'electronic';
}

type Book = {
    title: string;
    author: string;
    type: 'book'
}

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = {
    type: 'electronic' | 'book';
    brand?: string;
    model?: string;
    title?: string;
    author?: string;
}

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
  const brand = prompt("Give a brand: ")!;
  const model = prompt("Give a model: ")!;
  return {type: 'electronic', brand, model}
}
function createBook(): Book {
  const title = prompt("Give a book's title: ")!;
  const author = prompt("Give a book's author: ")!;
  return {type: 'book', title, author}
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
  console.log(`Product Type: ${product.type}`);
  if (product.type === 'electronic') {
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
  } else {
    console.log(`Title: ${product.title}`);
    console.log(`Author: ${product.author}`);
  }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);
