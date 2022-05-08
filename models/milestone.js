'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Milestone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Milestone.belongsToMany(models.User, {
        through: models.Achievement,
        as: 'collection_item',
        foreignKey: 'milestoneId'
      })
    }
  }
  Milestone.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    icon: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Milestone',
    tableName: 'milestones'
  });
  return Milestone;
};