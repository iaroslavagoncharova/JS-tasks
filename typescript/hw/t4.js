"use strict";

function createElectronicDevice() {
    var brand = prompt("Give a brand: ");
    var model = prompt("Give a model: ");
    return { type: 'electronic', brand: brand, model: model };
}
function createBook() {
    var title = prompt("Give a book's title: ");
    var author = prompt("Give a book's author: ");
    return { type: 'book', title: title, author: author };
}

var electronicProduct = createElectronicDevice();
var bookProduct = createBook();

function displayProductDetails(product) {
    console.log("Product Type: ".concat(product.type));
    if (product.type === 'electronic') {
        console.log("Brand: ".concat(product.brand));
        console.log("Model: ".concat(product.model));
    }
    else {
        console.log("Title: ".concat(product.title));
        console.log("Author: ".concat(product.author));
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
