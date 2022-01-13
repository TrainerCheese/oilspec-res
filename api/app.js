const express = require("express");
const { append } = require("express/lib/response");
const app = express();
const path = require("path");
const res = require("express/lib/response");
const req = require("express/lib/request");

const router = express.Router();

router.get("/", function (req, res) {
  //console.log(res.apiData);
  res.json({ message: "ok" });
});

module.exports = router;
