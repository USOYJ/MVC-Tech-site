const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Me too barb!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I'm sure you'll look lovely!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Congratulations barb!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Bravo!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I know right!",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Beautiful!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Go Barb!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
