'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Milestone_Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Milestone_Collection.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Milestone_Collection',
    tableName: 'milestone_collections'
  });
  return Milestone_Collection;
};