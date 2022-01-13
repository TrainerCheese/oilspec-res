// Express
const { timeEnd } = require("console");
const express = require("express");
const res = require("express/lib/response");

const app = express();
const path = require("path");

var staticPath = path.join(__dirname, "./views");
// Midleware
app.use(express.static(staticPath));
app.set("view-engine", "ejs");
app.use(logger);

// Logger
function logger(req, res, next) {
  console.log(`${req.originalUrl} at (${Date()})`);
  next();
}

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/index.ejs"));
});

app.get("/design", (req, res) => {
  res.render(path.join(__dirname, "views/design.ejs"));
});

app.get("/projects", (req, res) => {
  res.render(path.join(__dirname, "views/projects.ejs"));
});

app.get("/inspection", (req, res) => {
  res.render(path.join(__dirname, "views/inspection.ejs"));
});

app.get("/contact", (req, res) => {
  res.render(path.join(__dirname, "views/contact.ejs"));
});

app.use(function (req, res) {
  res.type("text/html");
  res.status(404);
  res.render(path.join(__dirname, "views/status0/404.ejs"));
});

app.listen(80, () => {});
