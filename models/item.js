'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsToMany(models.User, {
        through: models.Inventory,
        as: 'inv_item',
        foreignKey: 'itemId'
      })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items'
  });
  return Item;
};