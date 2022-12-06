'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeeklyAvailability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WeeklyAvailability.init({
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
    monday: DataTypes.STRING,
    tuesday: DataTypes.STRING,
    wednesday: DataTypes.STRING,
    thursday: DataTypes.STRING,
    friday: DataTypes.STRING,
    saturday: DataTypes.STRING,
    sunday: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'WeeklyAvailability',
    tableName:'weeklyAvailability'
  });
  return WeeklyAvailabilities;
};