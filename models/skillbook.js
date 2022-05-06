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
      // define association here
    }
  }
  Skillbook.init({
    con: DataTypes.INTEGER,
    str: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    wis: DataTypes.INTEGER,
    cha: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skillbook',
  });
  return Skillbook;
};