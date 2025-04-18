const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
];

function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

const titles = getBookTitles(books);
console.log(titles);
