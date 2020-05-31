const sqlite3 = require("sqlite3").verbose();
let db = null;

init_db = () => {
  //open database connection
  db = new sqlite3.Database("./db/database.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
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

create_table = (table_name,...Args) => {
  //create table()
  db.run("CREATE TABLE IF NOT EXISTS "+table_name+"("+Args+")");
}

insert_rows = (table_name, [...columns],[...values]) => {
  let placeholders = values.map((language) => "(?)").join(",");
  let sql = "INSERT INTO "+table_name+"("+columns+") VALUES " + placeholders;
  // output the INSERT statement
  console.log('sql:'+sql);
  console.log('Args: '+Args);
  db.run(sql, values, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
  });
}

//module.exports = db;
module.exports.conn = init_db;
module.exports.close = close_db;
module.exports.create = create_table;
module.exports.insert = insert_rows;
