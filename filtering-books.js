/*
Question 4: Write a program that takes a list of books, including their authors and publication years as input. The program 
should then filter out all books that were published before 2010 and create a new array with the remaining 
books, but with their author names capitalized
*/

const booksList = [
  {
    bookName: "The Wings of Fire",
    author: "Dr APJ Abdul Kalam",
    publishedYear: 1999,
  },
  {
    bookName: "The India Story",
    author: "Bimal Jalal",
    publishedYear: 2022,
  },
  {
    bookName: "A Better India: A Better World",
    author: "Narayana Murthy",
    publishedYear: 2010,
  },
  {
    bookName: "A Suitable Boy",
    author: "Vikram Seth",
    publishedYear: 2015,
  },
  {
    bookName: "A Tale of Two Cities",
    author: "Charles Darwin",
    publishedYear: 2005,
  },
];

const booksPublishedBefore2010 = booksList.filter(function (book) {
  if (book["publishedYear"] < 2010) {
    book["author"] = book.author.toUpperCase();
    return book;
  }
});

console.log(booksPublishedBefore2010);
