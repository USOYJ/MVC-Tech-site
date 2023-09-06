const { Post } = require("../models");

const postData = [
  {
    title: "First Barb Post",
    content: "This barbie is on her way to get her mani pedi.",
    user_id: 1,
  },
  
  {
    title: "Second Barb Post",
    content: "This barbie just got her hair done.",
    user_id: 2,
  },
  {
    title: "Third Barb Post",
    content: "This barbie is going to get her masters degree in computer science.",
    user_id: 3,
  },
  {
    title: "Fourth Barb Post",
    content: "This barbie needs a vacation.",
    user_id: 4,
  },
  {
    title: "Fifth Barb Post",
    content: "This barbie enjoys coding!",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
