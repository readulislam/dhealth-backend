'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeSlots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TimeSlots.init({
    weekday: DataTypes.STRING,
    slots: DataTypes.JSONB,
    timeRange: DataTypes.STRING
   
  }, {
    sequelize,
    modelName: 'TimeSlots',
    tableName:'timeSlots'
  });
  return TimeSlots;
};