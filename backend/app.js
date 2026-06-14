const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/db");

app.use(cors());
app.use(express.json());

port = 3000;

app.get("/", (req, res) => {
  res.send("Get Request Example");
});

app.post("/", (req, res) => {
  const { post } = req.body;
  res.status(200).json({ post: post });
});

app.listen(port, () => {
  console.log("Server is listening on port 3000...");
});
