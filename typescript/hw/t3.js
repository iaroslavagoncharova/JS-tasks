"use strict";

function promptForBook() {
    var bookTitle = prompt("Give a book's title: ");
    var bookAuthor = prompt("Give a book's author: ");
    var bookPublicationYear = +prompt("Give a book's publication year");
    var book = {
        title: bookTitle,
        author: bookAuthor,
        year: bookPublicationYear
    };
    return book;
}
var bookDetails = promptForBook();
console.log("Book Details:");
console.log("Title: ".concat(bookDetails.title));
console.log("Author: ".concat(bookDetails.author));
console.log("Publication Year: ".concat(bookDetails.year));
