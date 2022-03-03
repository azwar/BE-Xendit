const { Model } = require('sequelize');
const { sequelize, Sequelize } = require("../db_init");

class Organization extends Model {}

Organization.init({
  name: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: "Organization"
});

module.exports = Organization;

