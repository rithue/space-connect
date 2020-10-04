const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const auth = require("../middleware/auth.js");

const User = require("../models/users.js");
const urlencodedParser = bodyParser.urlencoded({extended:false});

const dataPath = "../data/users.json";

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  try{
    await newUser.save();
    token = await newUser.generateToken();

    res.status(201).send({newUser,token});
  }catch (e){
    console.log(e);
    res.status(400).send(e);
  }
})

router.post("/login",urlencodedParser,async (req, res) => {
  try{
    const userFound = await User.findByCredentials(req.body.userid, req.body.password);
    const token = await userFound.generateToken();
    res.send({userFound,token});
  }catch (e){
    console.log(e);
    res.status(400).send(e);
  }
});

router.get("/logout", (req, res) => {
  // fs.readFile(dataPath, "utf8", (err, data) => {
  //   if (err) {
  //     throw err;
  //   }

  res.send(JSON.parse('{"a": "b"}'));
});
  
module.exports = router;