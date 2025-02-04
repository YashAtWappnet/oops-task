# Library Management System

## 📌 Project Overview

The **Library Management System** is a JavaScript-based project that implements **Object-Oriented Programming (OOP)** concepts to manage books, members, and staff in a library. The system allows users to:

- Add, update, and remove books.
- Add and remove members.
- Borrow and return books.
- Track book availability and member transactions.

The project uses a **local database (`db.js`)** to store book and member data dynamically.

---

## 📂 Folder Structure

```
library-management-system/
│── db.js           # Local database storage
│── main.js         # Entry point for running the system
│── Book.js         # Defines the Book class
│── Member.js       # Defines the Member class
│── Staff.js        # Defines the Staff class (inherits from Member)
│── Library.js      # Manages books and members
│── package.json    # Node.js package configuration
│── README.md       # Project documentation
```

---

## 🚀 Features Implemented

- **Encapsulation:** Private fields (`#propertyName`) ensure data security.
- **Inheritance:** `Staff` class extends `Member` to inherit common properties.
- **Abstraction:** Core logic hidden within `Library` class methods.
- **Polymorphism:** Methods like `borrowBook()` and `returnBook()` work differently based on conditions.
- **Data Integrity:** Ensures book availability before issuing and updates quantity accordingly.

---

## 📦 Installation & Setup

1. **Clone the Repository**

```sh
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

2. **Initialize a Node.js Project**

```sh
npm init -y
```

3. **Enable ES Module Support**
   Modify `package.json` and add:

```json
{
  "type": "module"
}
```

4. **Run the Project**

```sh
npm start
```

---

## 🔧 Usage & Testing

### 1️⃣ Adding Books & Members

Modify `main.js` to add books and members:

```javascript
import Library from "./Library.js";
import Book from "./Book.js";
import Member from "./Member.js";

const library = new Library();

const book1 = new Book(
  "1111",
  "JavaScript Guide",
  "John Doe",
  "Programming",
  "TechPub",
  "2022",
  20,
  "A great JS book",
  5
);
library.addBook(book1);

const member1 = new Member(
  "M001",
  "Alice",
  "alice@example.com",
  "1234567890",
  "123 Main St"
);
library.addMember(member1);
```

### 2️⃣ Borrowing a Book

```javascript
library.borrowBook("1111", "M001");
```

📌 **Expected Output:**

```
Book borrowed successfully
```

### 3️⃣ Returning a Book

```javascript
library.returnBook("1111", "M001");
```

📌 **Expected Output:**

```
Book returned successfully
```

---

## 📋 Future Improvements

- 📌 Implement a **file-based database (`db.json`)** for persistent data storage.
- 📌 Add an **Admin Panel** for managing books and members via UI.
- 📌 Implement **authentication** for members and staff.
- 📌 Introduce **penalty system** for late returns.

---

## 🛠 Troubleshooting

### 1️⃣ **Syntax Errors**

Ensure **`"type": "module"`** is set in `package.json`.

### 2️⃣ **Imports Not Found**

Check that **file paths** use `./` (e.g., `import Book from "./Book.js";`).

### 3️⃣ **Database Not Updating**

Add `console.log(db.books, db.members);` in `db.js` to track stored data.

---

## 🤝 Contributing

Feel free to fork, enhance, and submit pull requests! 🚀

---

## 📝 License

This project is **open-source** and free to use.
