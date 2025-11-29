import express from "express";
import comicRoutes from "./routes/comicRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(comicRoutes);
app.use(transactionRoutes);


 app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


