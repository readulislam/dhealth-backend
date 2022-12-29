'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
   
    static associate(models) {
      // models.Patients.hasOne(models.Appointments,{
      //   foreignKey: 'patient_id',
      //   as:'patient'
      // })
    }
  }
  Patients.init({
    stateId:{
      type:DataTypes.INTEGER,
      references:{
        model:{
          tableName:'states'
        },
        key:'id'
      }
    },
    cityId:{
      type:DataTypes.INTEGER,
      references:{
        model:{
          tableName:'cities'
        },
        key:'id'
      }
    },
    title: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    contact: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    gender: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    pinCode: DataTypes.STRING,
    martialStatus: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Patients',
    tableName:'patients',
    underscored: true,
  });
  return Patients;
};