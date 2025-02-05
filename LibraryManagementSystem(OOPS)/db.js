const db = {
  books: [],
  members: [],

  saveData() {
    console.dir("Database updated!", this.books, this.members, { depth: null });
  },
};

export default db;
