import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "DevSprint backend is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
