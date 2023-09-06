const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    process.exit(0);
  }
};

seedAll();

