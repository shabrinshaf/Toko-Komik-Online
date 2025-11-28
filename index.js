import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

 app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to Online Store!");
});

app.use(router);
