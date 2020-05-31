const express = require("express");
const app = express();
const routes1 = require('./routes/route1');
const port = 80;
const hostname = "0.0.0.0";

//confugure ti use pug template engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use(routes1);

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.post("/", (req, res) => {
  res.send("post received");
});

serv_log = () => {
  console.log(`app server at ${hostname}: ${port}`);
};

app.listen(port, hostname, serv_log);
