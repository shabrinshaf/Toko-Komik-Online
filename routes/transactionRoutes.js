import express from "express";

//Menampilkan controller dari transactionController.js
import { 
  getTransactionsController, 
  createTransactionController 
} from "../controllers/transactionController.js";

const router = express.Router();

//Nama route untuk transaksi
router.get("/transactions", getTransactionsController);
router.post("/transactions", createTransactionController);

export default router;
