const path = require("path");
const express = require("express");
const app = express();
const routes = require("./routes/index.js");
var bodyParser = require("body-parser");

require("env2")("config.env");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(routes);

module.exports = app;
