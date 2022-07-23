const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json(movies);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
