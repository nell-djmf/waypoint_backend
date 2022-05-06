'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Side_Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Side_Quest.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    xp_gain: DataTypes.INTEGER,
    quest_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Side_Quest',
  });
  return Side_Quest;
};