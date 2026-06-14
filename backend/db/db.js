const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.log("Database connection failed: ", err.message);
  } else {
    console.log("Connected to database.");
  }
});

db.run(`CREATE TABLE IF NOT EXISTS projects (
        projectID INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        pmName TEXT NOT NULL,
        techName TEXT NOT NULL,
        description TEXT NOT NULL,
        completionDate TEXT
    )`);

module.exports = db;
