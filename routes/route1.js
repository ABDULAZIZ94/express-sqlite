const express = require('express');
const routes1 = express.Router();
const connection = require("../db/connection");
//gets
routes1.get('/create', (req, res) => {
  res.render('create');
});
routes1.get('/read', (req, res) => {
  res.render('read');
});
routes1.get('/read/db', (req, res) => {
  //f get rows from conn
  getR = (r) => {
    res.send(r);
  }
  let db = connection.conn();
  connection.query(db,'HADITH' ,getR);
  // connection.close(db);
});
routes1.get('/update', (req, res) => {
  res.render('update');
});
routes1.get('/update/db', (req, res) => {
    //f get rows from conn
    getR = (r) => {
      res.send(r);
    }
    connection.conn();
    connection.query(getR);
    connection.close();
});
routes1.get('/delete', (req, res) => {
  res.render('delete');
});
//posts
routes1.post('/create', (req, res) => {
  let db = connection.conn();
  // console.log("body: "+req.body.table_name);
  if(req.body.table_name!=null){
    // console.log("body: "+req.body.table_name);
    connection.create(db, req.body.table_name,'hadith_text TEXT');
  }else if(req.body.row_col!=null && req.body.row_val!=null){
    connection.insert(db, 'HADITH', [req.body.row_col], [req.body.row_val]);
    console.log("body: "+req.body.row_col);
    console.log("body: "+req.body.row_val);
  }
  res.sendStatus(202); 
  // connection.close();
});
routes1.post('/read', (req, res) => {
  console.log("body: "+req.body);
  console.log("cookies: "+req.cookies);
});
routes1.post('/read/db2', (req, res) => {
  //f get rows from conn
  getR = (r) => {
    res.send(r);
  }
  let db = connection.conn();
  connection.query_hadith(db, getR);
  connection.close(db);
});
routes1.post('/update', (req, res) => {
  console.log("body: "+req.body);
  console.log("cookies: "+req.cookies);
});
routes1.post('/delete', (req, res) => {
  console.log("body: "+req.body);
  console.log("cookies: "+req.cookies);
});
//export
module.exports = routes1;