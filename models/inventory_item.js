'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventory_Item.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    inventory_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory_Item',
  });
  return Inventory_Item;
};