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

// Getting all projects
app.get("/projects", async (req, res) => {
  const statement = "SELECT * FROM projects;";

  db.all(statement, (err, rows) => {

    if (err) {
      res.status(500).json({msg: "Something went wrong, please try again."});
    }

    res.status(200).json(rows);

  })
});

// Create Project
app.post("/projects", async (req, res) => {
  const {name, pmName, techName, description, completionDate} = req.body;
  const params = [name, pmName, techName, description, completionDate];

  const statement = 'INSERT INTO projects (name, pmName, techName, description, completionDate) VALUES (?, ?, ?, ?, ?)';

  db.run(statement, params, function (err) {
    if(err) {
      res.status(400).json({msg:"Something went wrong, please try again."})
    }

    res.status(200).json({msg:`Row inserted with ID: ${this.lastID}`});
  })
  
})

// build out delete on backend
app.delete("/projects/:id", async (req, res) => {
  console.log(req.params);

  res.send("ok");
  
})

app.listen(port, () => {
  console.log("Server is listening on port 3000...");
});
