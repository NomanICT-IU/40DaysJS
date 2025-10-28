let booksCollection = {
  "Harry Potter": { author: "J.K. Rowling", price: 500, quantity: 5 },
  "The Hobbit": { author: "J.R.R. Tolkien", price: 400, quantity: 3 },
  1984: { author: "George Orwell", price: 350, quantity: 8 },
  "The Alchemist": { author: "Paulo Coelho", price: 450, quantity: 6 },
  "To Kill a Mockingbird": { author: "Harper Lee", price: 380, quantity: 0 },
};
/**restock Function */
function restockBooks(bookName, author, price, quantity) {
  const book = booksCollection[bookName];
  if (book) {
    book.quantity = book.quantity + quantity;
  } else {
    booksCollection[bookName] = {
      author,
      price,
      quantity,
    };
  }
}
restockBooks("The Bible of JS", "Abdullah Al Noman", 999, 10);
restockBooks("The Alchemist", "Paulo Coelho", 350, 1);

console.log(booksCollection);
function searchBook(bName) {
  const book = booksCollection[bName];
  if (!book) {
    console.log(`"${bName}" is not available in our collection.`);
    return;
  }
  if (book.quantity < 1) {
    console.log(`"${bName}" is currently out of stock.`);
    return;
  }

  console.table([
    {
      "Book Name": bName,
      Author: book.author,
      "Price (Taka)": book.price,
      "Available Quantity": book.quantity,
    },
  ]);
}

searchBook("The Bible of JS");
