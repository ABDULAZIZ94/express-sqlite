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
  connection.create(req.body.table_name,'hadith_text TEXT');
  connection.close();
  // res.sendStatus(201);
  res.redirect('/');
  // res.end();
  console.log("body: "+req.body.table_name);
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