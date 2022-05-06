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
    icon: DataTypes.STRING,
    shop_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shop_Item',
    tableName: 'shop_items'
  });
  return Shop_Item;
};