const express = require("express");
const router = express.Router();
const getData = require("./getData.js");

router.get("/getData", getData.get);

module.exports = router;
