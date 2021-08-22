"use strict";

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const POSTGRES_URI = process.env.POSTGRES_URI;
const sequelize = new Sequelize(POSTGRES_URI, {});

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  db: sequelize,
  User,
};
