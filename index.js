const express = require("express");
const app = express();
const port = 80;
const hostname = "0.0.0.0";
const sqlite3 = require("sqlite3").verbose();

// open database in memory
let db = new sqlite3.Database("./db/chinook.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

db.run("CREATE TABLE IF NOT EXISTS langs(name text)");

let languages = ["C++", "Python", "Java", "C#", "Go"];

// construct the insert statement with multiple placeholders
// based on the number of rows
let placeholders = languages.map((language) => "(?)").join(",");
let sql = "INSERT INTO langs(name) VALUES " + placeholders;

// insert one row into the langs table
db.run(sql, placeholders, function (err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/", (req, res) => {
  res.send("post received");
});

serv_log = () => {
  console.log(`app server at ${hostname}: ${port}`);
};

app.listen(port, hostname, serv_log);
