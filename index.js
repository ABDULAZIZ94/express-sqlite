const express = require("express");
const app = express();
const port = 80;
const hostname = "0.0.0.0";

const Database = require("sqlite3").verbose;

var db = new Database("db/hadith", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to database.");
  }
});

db.run("CREATE TABLE lorem (info TEXT)");

var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
for (var i = 0; i < 10; i++) {
  stmt.run("Ipsum " + i);
}
stmt.finalize();

db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
  console.log(row.id + ": " + row.info);
});

db.close();

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
