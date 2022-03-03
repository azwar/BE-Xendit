const { Model } = require('sequelize');
const { sequelize, Sequelize } = require("../db_init");
const Organization = require("./organization.model");

class Member extends Model {}

Member.init({
  username: {
    type: Sequelize.STRING
  },
  avatarUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  },
  followers: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  following: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  organizationId: {
    type: Sequelize.INTEGER,
    references: {
      model: Organization,
      key: "id"
    }
  }
}, {
  sequelize,
  modelName: "Member"
});

module.exports = Member;