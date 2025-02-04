import Member from "./Member.js";

class Staff extends Member {
  #role;

  constructor(
    memberId,
    memberName,
    memberEmail,
    memberPhone,
    memberAddress,
    role
  ) {
    super(memberId, memberName, memberEmail, memberPhone, memberAddress);
    this.#role = role;
  }

  getRole() {
    return this.#role;
  }

  setRole(role) {
    this.#role = role;
  }

  addBookQuantity(book, quantity) {
    if (quantity < 1) throw new Error("Quantity must be positive");
    book.updateBookInfo(
      book.title,
      book.author,
      book.genre,
      book.publisher,
      book.publishDate,
      book.price,
      book.description,
      book.quantity + quantity
    );
  }

  removeBookQuantity(book, quantity) {
    if (quantity < 1 || book.quantity < quantity)
      throw new Error("Invalid quantity");
    book.updateBookInfo(
      book.title,
      book.author,
      book.genre,
      book.publisher,
      book.publishDate,
      book.price,
      book.description,
      book.quantity - quantity
    );
  }
}

export default Staff;
