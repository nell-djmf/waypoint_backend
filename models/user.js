'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Entry, {
        foreignKey: 'userId' 
      }),
      User.hasMany(models.Quest, {
        foreignKey: 'userId' 
      }),
      User.belongsToMany(models.Item, {
        as: 'inv_owner',
        through: models.Inventory,
        foreignKey: 'userId' 
      }),
      User.belongsToMany(models.Milestone, {
        as: 'milestone_collection',
        through: models.Achievement,
        foreignKey: 'userId' 
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};