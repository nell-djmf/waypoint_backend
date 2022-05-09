'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skillbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skillbook.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Skillbook.init({
    con: DataTypes.INTEGER,
    str: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    wis: DataTypes.INTEGER,
    cha: DataTypes.INTEGER,
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
    modelName: 'Skillbook',
    tableName: 'skillbooks'
  });
  return Skillbook;
};