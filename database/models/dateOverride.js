'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DateOverride extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DateOverride.init({
    doctorId:{
      type:DataTypes.INTEGER,
      field:'doctor_id',
      references:{
        model:{
          tableName:'doctors'
        },
        key:'id'
      }
    },
    date: DataTypes.STRING,
    overall_Availability: DataTypes.STRING,
    current_Availability: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DateOverride',
    tableName:'dateOverride',
    underscored: true,
  });
  return DateOverride;
};