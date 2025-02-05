class Book {
  #isbn;
  #title;
  #author;
  #genre;
  #publisher;
  #publishDate;
  #price;
  #description;
  #quantity;

  constructor(
    isbn,
    title,
    author,
    genre,
    publisher,
    publishDate,
    price,
    description,
    quantity
  ) {
    if (!isbn || !title || !author || quantity < 0) {
      throw new Error("Invalid book details");
    }

    this.#isbn = isbn;
    this.#title = title;
    this.#author = author;
    this.#genre = genre;
    this.#publisher = publisher;
    this.#publishDate = publishDate;
    this.#price = price;
    this.#description = description;
    this.#quantity = quantity;
  }

  get isbn() {
    return this.#isbn;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get genre() {
    return this.#genre;
  }

  get publisher() {
    return this.#publisher;
  }

  get publishDate() {
    return this.#publishDate;
  }

  get price() {
    return this.#price;
  }

  get description() {
    return this.#description;
  }

  get quantity() {
    return this.#quantity;
  }

  isAvailable() {
    return this.#quantity > 0;
  }

  updateBookInfo(
    title,
    author,
    genre,
    publisher,
    publishDate,
    price,
    description,
    quantity
  ) {
    if (quantity < 0) throw new Error("Quantity cannot be negative");

    this.#title = title;
    this.#author = author;
    this.#genre = genre;
    this.#publisher = publisher;
    this.#publishDate = publishDate;
    this.#price = price;
    this.#description = description;
    this.#quantity = quantity;
  }

  borrowBook() {
    if (this.#quantity > 0) {
      this.#quantity -= 1;
      return "Book borrowed successfully";
    } else {
      return "Book is not available";
    }
  }

  returnBook() {
    this.#quantity += 1;
    return "Book returned successfully";
  }
}

export default Book;
