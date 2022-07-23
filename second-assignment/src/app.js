const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Name is required"); // validation

    res.send(`Hello ${name}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
