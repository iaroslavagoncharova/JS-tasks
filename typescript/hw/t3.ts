export {}; // hack to ignore Book from task 4

interface Book {
    title: string;
    author: string;
    year : number;
}

function promptForBook() {
  const bookTitle = prompt("Give a book's title: ")!;
  const bookAuthor = prompt("Give a book's author: ")!;
  const bookPublicationYear = +prompt("Give a book's publication year")!;

  const book: Book = {
    title: bookTitle,
    author: bookAuthor,
    year: bookPublicationYear
  };
  return book;
}

const bookDetails = promptForBook();

console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.year}`);
