const express = require("express");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
const app = express();
const routes1 = require('./routes/route1');
const port = 80;
const hostname = "0.0.0.0";
//confugure pug engine
app.set('view engine', 'pug');
app.set('views', './views');
//use declarations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(upload.array());
app.use(cookieParser());
app.use(routes1);
app.use(express.static('public'));
//gets
app.get("/", (req, res) => {
  res.render("index");
});
app.get("*", (req, res) => {
  res.render("404");
});
//posts
app.post("/", (req, res) => {
  res.send("post received");
});
//logs
serv_log = () => {
  console.log(`app server at ${hostname}: ${port}`);
};
//listen
app.listen(port, hostname, serv_log);