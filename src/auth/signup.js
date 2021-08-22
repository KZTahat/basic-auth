"use strict";
const base64 = require("base-64");
const bcrypt = require("bcrypt");
const { User } = require("./index.js");

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

let signup = async (req, res, next) => {
  try {
    //1- get user info from the request.
    let authHeader = req.headers.authorization;
    let encodedCreditentials = authHeader.split(" ")[1];
    let decodedCreditentials = base64.decode(encodedCreditentials);
    let [username, password] = decodedCreditentials.split(":");

    //2- check if the user already exists
    let data = await User.findOne({ where: { username } });
    if (data) {
      next("this username already exists ");
    } else {
      //3- encrypt password
      //password will be encrypted inside the beforCreate function befor saving to teh dataBase

      //4- create user
      let newRecord = await User.create({ username, password });
      res.status(201).json(newRecord);
      next();
    }
  } catch (error) {
    console.log("Error signup middelware", error);
  }
};

module.exports = signup;
