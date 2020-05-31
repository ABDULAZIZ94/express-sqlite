const express = require('express');
const routes1 = express.Router();
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
  // console.log("route: "+req.route)
  console.log("body: "+req.body.table_name);
  // console.log("cookies: "+req.cookies);
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