export const generateIsbn = () => {
  // use a closure to keep track of the last generated ISBN
  let usedIsbns = [];
  return () => {
    let isbn = Math.floor(Math.random() * 1000000000000);
    while (usedIsbns.includes(isbn)) {
      isbn = Math.floor(Math.random() * 1000000000000);
    }
    usedIsbns.push(isbn);
    return isbn;
  };
};

export const validateIsbn = (isbn) => {
  const isbnPattern = /^[0-9]{13}$/;
  return isbnPattern.test(isbn);
};

export const generateMemberId = () => {
  let usedIds = [];
  return () => {
    let id = Math.floor(Math.random() * 1000000);
    while (usedIds.includes(id)) {
      id = Math.floor(Math.random() * 1000000);
    }
    usedIds.push(id);
    return id;
  };
};

export const validateMemberId = (id) => {
  const idPattern = /^[0-9]{6}$/;
  return idPattern.test(id);
};
