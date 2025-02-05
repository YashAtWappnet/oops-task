import Book from "./Book.js";
import Member from "./Member.js";
import Staff from "./Staff.js";
import Library from "./Library.js";

const library = new Library();

// Create Books
const book1 = new Book(
  "12345",
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "Fiction",
  "Scribner",
  "1925",
  10,
  "Classic novel",
  3
);
const book2 = new Book(
  "67890",
  "1984",
  "George Orwell",
  "Dystopian",
  "Secker & Warburg",
  "1949",
  15,
  "Dystopian classic",
  2
);

library.addBook(book1);
library.addBook(book2);

// Create Members
const member1 = new Member(
  "M001",
  "Alice",
  "alice@example.com",
  "1234567890",
  "123 Main St"
);
library.addMember(member1);

// Borrowing and Returning Books
library.borrowBook("12345", "M001");
library.returnBook("12345", "M001");
