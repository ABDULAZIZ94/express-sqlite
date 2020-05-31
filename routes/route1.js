const express = require('express');
const routes1 = express.Router();

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
module.exports = routes1;