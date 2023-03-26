const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`welcome home swati from router`);
});

module.exports = router;
