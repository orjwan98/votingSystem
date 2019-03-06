const express = require("express");
const router = express.Router();
const getData = require("./getData.js");
const registerUser = require("./registerUser.js");

router.get("/getData", getData.get);
router.post("/registerUser", registerUser.post);

module.exports = router;
