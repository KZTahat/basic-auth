"use strict";

const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const signin = require('./auth/signin.js');
const signup = require('./auth/signup.js');
const internalServerErrorHandler = require('./errorHandlers/500.js');

app.post('/signin', signin, (req, res) => {});
app.post('/signup', signup, (req, res) => {});
app.use(internalServerErrorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server Is Listning On Port ${port}`);
  });
}

module.exports = {
  start,
  app,
};
