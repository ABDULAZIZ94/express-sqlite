const sqlite3 = require("sqlite3").verbose();
// open database in memory
let db = null;

init_db = () => {
  db = new sqlite3.Database("./db/chinook.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });
};

// close the database connection
/*db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
*/
//module.exports = db;
module.exports.con = init_db;
