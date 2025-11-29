import dataComic, { transactions } from "../data.js"; //mengambil daya komik dan transaksi dari file data.js

// fungsi untuk mendapatkan semua transaksi
export function getAllTransactions() {
  return transactions;
}

// fungsi untuk membuat transaksi baru
export function createTransaction({ comicId, quantity }) {
  const comic = dataComic.find(c => c.id === Number(comicId));

  if (!comic) {
    throw new Error("Comic not found");
  }

  if (comic.stock < quantity) {
    throw new Error("Not enough stock");
  }

  // Kurangi stok komik
  comic.stock -= quantity;

  // Buat transaksi baru
  const newTransaction = {
    id: transactions.length + 1,
    comicId,
    quantity,
    totalPrice: comic.price * quantity,
    date: new Date().toISOString()
  };

  // Simpan transaksi
  transactions.push(newTransaction);
  return newTransaction;
}
