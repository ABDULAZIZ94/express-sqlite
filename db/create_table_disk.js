const db = require('./connection').db;
//create db()
create_db = (table_name, ...args) => {
  db.run("CREATE TABLE IF NOT EXISTS "+table_name+"(name text)");
}
  