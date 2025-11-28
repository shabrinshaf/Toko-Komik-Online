import express from "express";
import router from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

 app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.use(router);
