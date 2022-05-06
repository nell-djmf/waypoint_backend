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
      // define association here
    }
  }
  Milestone.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Milestone',
  });
  return Milestone;
};