import { getAllTransactions, createTransaction } from "../services/transactionService.js";

export function getTransactionsController(req, res) {
  res.json(getAllTransactions());
}

export function createTransactionController(req, res) {
  try {
    const { comicId, quantity } = req.body;

    if (!comicId || !quantity) {
      return res.status(400).json({ message: "comicId and quantity are required" });
    }

    const transaction = createTransaction({ comicId, quantity });
    res.status(201).json(transaction);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
