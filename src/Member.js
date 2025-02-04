class Member {
  #memberId;
  #memberName;
  #memberEmail;
  #memberPhone;
  #memberAddress;
  #borrowedBooks = [];
  static MAX_BORROWED_BOOKS = 5; // Limit per member

  constructor(memberId, memberName, memberEmail, memberPhone, memberAddress) {
    if (!memberId || !memberName || !memberEmail) {
      throw new Error("Invalid member details");
    }

    this.#memberId = memberId;
    this.#memberName = memberName;
    this.#memberEmail = memberEmail;
    this.#memberPhone = memberPhone;
    this.#memberAddress = memberAddress;
  }

  get memberId() {
    return this.#memberId;
  }

  get memberName() {
    return this.#memberName;
  }

  get memberEmail() {
    return this.#memberEmail;
  }

  get memberPhone() {
    return this.#memberPhone;
  }

  get memberAddress() {
    return this.#memberAddress;
  }

  get borrowedBooks() {
    return this.#borrowedBooks;
  }

  borrowBook(isbn) {
    if (this.#borrowedBooks.length >= Member.MAX_BORROWED_BOOKS) {
      throw new Error("Borrowing limit reached");
    }
    this.#borrowedBooks.push(isbn);
  }

  returnBook(isbn) {
    this.#borrowedBooks = this.#borrowedBooks.filter(
      (bookIsbn) => bookIsbn !== isbn
    );
  }

  toString() {
    return `Member ID: ${this.#memberId}, Name: ${this.#memberName}, Email: ${
      this.#memberEmail
    }`;
  }
}

export default Member;
