'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventTypes.init({
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'EventTypes',
    tableName:'eventTypes',
  });
  return EventTypes;
};