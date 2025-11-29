import express from "express";
import { 
  getTransactionsController, 
  createTransactionController 
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/transactions", getTransactionsController);
router.post("/transactions", createTransactionController);

export default router;
