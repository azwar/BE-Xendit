const { Model } = require('sequelize');
const { sequelize, Sequelize } = require("../db_init");
const Organization = require("./organization.model");
const Member = require("./member.model");

class Comment extends Model { }

Comment.init({
  comment: {
    type: Sequelize.STRING
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  memberId: {
    type: Sequelize.INTEGER,
    references: {
      model: Member,
      key: "id"
    }
  },
  organizationId: {
    type: Sequelize.INTEGER,
    references: {
      model: Organization,
      key: "id"
    }
  }
},
  {
    sequelize,
    modelName: "Comment"
  }
);

Comment.belongsTo(Member, { as: 'Member', foreignKey: 'memberId' });
Comment.belongsTo(Organization, { as: 'Organization', foreignKey: 'organizationId' }); 

module.exports = Comment
