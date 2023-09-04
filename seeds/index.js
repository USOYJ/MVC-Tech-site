const { User, Post, Comment } = require('../models');
const userData = require('./user-seeds');
const postData = require('./post-seeds');
const sequelize = require('../../MVC-Tech-site/config/connection');
const commentData = require('./comment-seeds');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const posts = await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });

    const comments = await Comment.bulkCreate(commentData, {
      individualHooks: true,
      returning: true,
    });

    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1); 
  }
};

seedDatabase();
