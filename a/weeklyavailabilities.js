'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeeklyAvailabilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WeeklyAvailabilities.init({
    eventTypeId:{
      type: DataTypes.INTEGER,
      field: 'eventType_id',
      references:{
        model:{
          tableName:'eventTypes'
        },
        key:'id'
      }
    },
    doctorId:{
type:DataTypes.INTEGER,
field:'doctor_id',
references:{
  model:{
    tableName:'doctors'
  }
}
    },
    Monday: DataTypes.JSONB,
    Tuesday: DataTypes.JSONB,
    Wednesday: DataTypes.JSONB,
    Thursday: DataTypes.JSONB,
    Friday: DataTypes.JSONB,
    Saturday: DataTypes.JSONB,
    Sunday: DataTypes.JSONB,
   
  }, {
    sequelize,
    modelName: 'WeeklyAvailabilities',
    tableName:'weeklyAvailabilities'
  });
  return WeeklyAvailabilities;
};