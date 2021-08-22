"use strict";
const base64 = require("base-64");
const { User } = require("./index.js");
const bcrypt = require("bcrypt");

let signin = async (req, res, next) => {
  try {
    /*
     * firs we need to get the credentials from the request
     */
    //1- get user info from the request.
    let authHeader = req.headers.authorization;
    let encodedCreditentials = authHeader.split(" ").pop();
    let decodedCreditentials = base64.decode(encodedCreditentials);
    let [username, password] = decodedCreditentials.split(":");
    // get the user from the database
    let user = await User.findOne({ where: { username } });
    let isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      res.status(200).json(user);
      next();
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    next(`error signin middleware ${err}`);
  }
};

module.exports = signin;
