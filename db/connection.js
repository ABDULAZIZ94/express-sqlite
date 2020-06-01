const sqlite3 = require("sqlite3").verbose();
//generelized functions
init_db = () => {
  //open database connection
  let  db = new sqlite3.Database("./db/database.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    // console.log('db: '+db);
    console.log("Connected to the database.");
  });
  return db;
};

close_db = (db) => {
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

insert_rows = (table_name, [...cols], [...vals] ) => {
  //insert row(s)
  let placeholders = vals.map((v) => "(?)").join(",");
  let sql = "INSERT INTO "+table_name+"("+cols+") VALUES " + placeholders;
  // output the INSERT statement
  console.log('sql:'+sql);
  console.log('cols: '+cols);
  console.log('Vals: '+vals);
  db.run(sql, vals,  (err) => {
    if (err) {
      // console.error(`err: ${err.message}`);
      return console.error(`err: ${err.message}`);
    }
    // console.log(`Rows inserted ${changes}`);
    return console.log(`Rows inserted ${this.changes}`);
  });
}

query_rows =  (db, table_name, getR) => {
  db.all("SELECT * FROM "+table_name, (err, rows) => {
    getR(rows); 
    // console.log(rows);
  });
}
//specific functions
insert_row_hadith = (db,[...cols], [...vals], getR) => {
  let placeholders = vals.map((v) => "(?)").join(",");
  $sql = "INSERT INTO HADITH("+cols+") VALUES "+ placeholders;
  db.run(sql, vals, err => {
    if(err){
      return console.error(`err: ${err.message}`);
    }
    getR(`Rows inserted ${this.changes}`);
  });
}

query_row_hadith = (db) => {
  db.all("SELECT * FROM HADITH", (err, rows) => {
    getR(rows); 
  });
}

deleted_row_hadith = () => {

}

update_row_hadith = () => {

}

//module.exports = db;
module.exports.conn = init_db;
module.exports.close = close_db;
module.exports.create = create_table;
module.exports.insert = insert_rows;
module.exports.query = query_rows;
module.exports.query_hadith = query_row_hadith;
