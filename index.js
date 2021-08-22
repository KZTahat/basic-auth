"use strict";

const { start } = require("./src/server.js");
const { db } = require("./src/auth/index.js");

db.sync()
  .then(() => {
    start(process.env.PORT);
  })
  .catch(console.error);
