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
 
});
routes1.post('/read', (req, res) => {
  
});
routes1.post('/update', (req, res) => {
  
});
routes1.post('/delete', (req, res) => {
  
});
//export
module.exports = routes1;