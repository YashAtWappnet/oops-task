import db from "../db.js";
import Book from "./Book.js";
import Member from "./Member.js";

class Library {
  constructor() {
    this.books = db.books;
    this.members = db.members;
  }

  addBook(book) {
    if (!book instanceof Book) throw new Error("Invalid book object");
    this.books.push(book);
    db.saveData();
  }

  removeBook(isbn) {
    this.books = this.books.filter((b) => b.isbn !== isbn);
    db.saveData();
  }

  addMember(member) {
    if (!member instanceof Member) throw new Error("Invalid member object");
    this.members.push(member);
    db.saveData();
  }

  removeMember(memberId) {
    this.members = this.members.filter((m) => m.memberId !== memberId);
    db.saveData();
  }

  borrowBook(isbn, memberId) {
    const book = this.books.find((b) => b.isbn === isbn);
    const member = this.members.find((m) => m.memberId === memberId);

    if (!book || !member) throw new Error("Invalid book or member");
    if (!book.isAvailable()) throw new Error("Book is not available");

    member.borrowBook(isbn);
    book.borrowBook();
    db.saveData();
  }

  returnBook(isbn, memberId) {
    const book = this.books.find((b) => b.isbn === isbn);
    const member = this.members.find((m) => m.memberId === memberId);

    if (!book || !member) throw new Error("Invalid book or member");

    member.returnBook(isbn);
    book.returnBook();
    db.saveData();
  }
}

export default Library;
