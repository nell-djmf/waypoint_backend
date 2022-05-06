'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shop_Item.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    shop_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shop_Item',
  });
  return Shop_Item;
};