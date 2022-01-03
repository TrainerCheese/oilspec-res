// Express
const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");

var staticPath = path.join(__dirname, "/");
// Midleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/design", (req, res) => {
  res.sendFile(path.join(__dirname, "/design.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "/projects.html"));
});

app.get("/inspection", (req, res) => {
  res.sendFile(path.join(__dirname, "/inspection.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact.html"));
});

app.use(function (req, res) {
  res.type("text/html");
  res.status(404);
  res.sendFile(path.join(__dirname, "/status0/404.html"));
});

app.listen(80);
