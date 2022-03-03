const { sequelize, Sequelize } = require("../db_init");
const Member = require("./member.model");

const Follower = sequelize.define("Follower", {
  memberId: {
    type: Sequelize.INTEGER,
    references: {
      model: Member,
      key: "id"
    }
  },  
  followerId: {
    type: Sequelize.INTEGER,
    references: {
      model: Member,
      key: "id"
    }
  },
});

module.exports = Follower;