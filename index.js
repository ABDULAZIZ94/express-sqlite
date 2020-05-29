const express = require("express");
const app = express();
const port = 80;
const hostname = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/", (req, res) => {
  res.send("post received");
});

serv_log = () => {
  console.log(`app server at ${hostname}: ${port}`);
};

app.listen(port, hostname, serv_log);
