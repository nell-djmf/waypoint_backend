'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quest.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Quest.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    skillAffinity: DataTypes.STRING,
    type: DataTypes.STRING,
    icon: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Quest',
    tableName: 'quests'
  });
  return Quest;
};