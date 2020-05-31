const sqlite3 = require("sqlite3").verbose();
let db = null;

init_db = () => {
  //open database connection
  db = new sqlite3.Database("./db/chinook.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });
};

close_db = () => {
  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
}


//module.exports = db;
module.exports.conn = init_db;
module.exports.close = close_db;
module.exports.db = db;
