'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventType.init({
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
    doctorId:{
      type: DataTypes.INTEGER,
      field:'doctor_id',

      references:{
        model:{
          tableName:'doctors'
        },
        key:'id'
      }
    }
   
  }, {
    sequelize,
    modelName: 'EventType',
    tableName:'eventType',
  });
  return EventType;
};