import dataComic, { transactions } from "../data.js";

export function getAllTransactions() {
  return transactions;
}

export function createTransaction({ comicId, quantity }) {
  const comic = dataComic.find(c => c.id === Number(comicId));

  if (!comic) {
    throw new Error("Comic not found");
  }

  if (comic.stock < quantity) {
    throw new Error("Not enough stock");
  }

  // Kurangi stok
  comic.stock -= quantity;

  const newTransaction = {
    id: transactions.length + 1,
    comicId,
    quantity,
    totalPrice: comic.price * quantity,
    date: new Date().toISOString()
  };

  transactions.push(newTransaction);
  return newTransaction;
}
