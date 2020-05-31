const c = require("./db/connection");
/**
 c.con.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
**/
c.con(); // also can c.con
