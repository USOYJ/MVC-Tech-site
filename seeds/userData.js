const { User } = require("../models");

const userData = [
  {
    username: "barbie1",
    email: "barbie1@example.com",
    password: "password1",
  },
  {
    username: "barbie2",
    email: "barbie2@example.com",
    password: "password2",
  },
  {
    username: "barbie3",
    email: "barbie3@example.com",
    password: "password3",
  },
  {
    username: "barbie4",
    email: "barbie4@example.com",
    password: "password4",
  },
  {
    username: "barbie5",
    email: "barbie5@example.com",
    password: "password5",
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
