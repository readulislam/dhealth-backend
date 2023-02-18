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
          tableName:'eventType'
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
    monday: DataTypes.JSONB,
    tuesday: DataTypes.JSONB,
    wednesday: DataTypes.JSONB,
    thursday: DataTypes.JSONB,
    friday: DataTypes.JSONB,
    saturday: DataTypes.JSONB,
    sunday: DataTypes.JSONB,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'WeeklyAvailabilities',
    tableName:'weeklyAvailabilities'
  });
  return WeeklyAvailabilities;
};