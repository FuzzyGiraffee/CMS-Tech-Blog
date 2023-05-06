const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "rutherford",
    password: "password123",
  },
  {
    username: "boimler",
    password: "password123",
  },
  {
    username: "tendi",
    password: "password123",
  },
  {
    username: "mariner",
    password: "password123",
  },
  {
    username: "billups",
    password: "password123",
  },
  {
    username: "freeman",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
