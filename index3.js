const c = require("./connection");
c.con.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});

