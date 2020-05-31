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
routes1.get('/update', (req, res) => {
  res.render('update');
});
routes1.get('/delete', (req, res) => {
  res.render('delete');
});
//posts
routes1.post('/create', (req, res) => {
  connection.conn(); 
  
  if(req.body.table_name!=null)
    connection.create(req.body.table_name,'hadith_text TEXT');
    console.log("body: "+req.body.table_name);
  if(req.body.row_id!=null)
    console.log("body: "+req.body.row_id);
  if(req.body.row_text!=null)
    console.log("body: "+req.body.row_text);
  res.sendStatus(201);
  connection.close();
   //action(script:f()) with alert() implementation
  // res.redirect('/create'); //html action('<path>') implementation
  // res.end();
});
routes1.post('/read', (req, res) => {
  console.log("body: "+req.body);
  console.log("cookies: "+req.cookies);
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