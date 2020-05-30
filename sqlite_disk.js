const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/chinook.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

db.run("CREATE TABLE IF NOT EXISTS langs(name text)");

let languages = ["C++", "Python", "Java", "C#", "Go"];

let placeholders = languages.map((language) => "(?)");

console.log("placeholders:" + placeholders);
let sql = "INSERT INTO langs(name) VALUES " + placeholders;
console.log("sql:" + sql);

// insert one row into the langs table
db.run(sql, languages, function (err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

let sql2 = `SELECT * FROM langs`;

db.all(sql2, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
