var express = require('express');
var router = express.Router();
router.post("/login", (req, res) => {
// fs.readFile(dataPath, "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }

res.send(JSON.parse("login"));
});

router.post("/logout", (req, res) => {
// fs.readFile(dataPath, "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }

res.send(JSON.parse("logout"));
});
module.exports = router;