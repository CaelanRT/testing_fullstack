const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.log("Database connection failed: ", err.message);
  } else {
    console.log("Connected to database.");
  }
});

db.run(`CREATE TABLE IF NOT EXISTS users (
        userid INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password TEXT NOT NULL
    )`);

module.exports = db;
