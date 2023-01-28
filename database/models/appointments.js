'use strict';
const {
  Model
} = require('sequelize');
const disease = require('./disease');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Appointments.belongsTo(models.Doctors,{
        foreignKey: 'doctor_id',
        as:'doctor'
      })
      models.Appointments.belongsTo(models.Patients,{
        foreignKey: 'patient_id',
        as:'patient'
      })  
      models.Appointments.belongsTo(models.Disease,{
        foreignKey: 'disease_id ',
        as:'disease'
      })  
    }
  }
  Appointments.init({
    doctorId: {
      type:DataTypes.INTEGER,
      field:'doctor_id',
      references:{
        model:{
          tableName:'doctors'
        },
        key:'id'
      }
    },
    patientId: {
      type:DataTypes.INTEGER,
      field:'patient_id',
      references:{
        model: {
          tableName: 'patients'
        },
        key:'id'
      }
    },
    diseaseId: {
      type:DataTypes.INTEGER,
      field:'disease_id',
      references:{
        model: {
          tableName: 'diseases'
        },
        key:'id'
      }
    },
    time: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    timeSlotId: DataTypes.INTEGER,
    requestedByEmail: DataTypes.STRING,
    requestedByPhone:DataTypes.STRING,
    appointmentType:DataTypes.STRING,
    date: DataTypes.STRING,
    diseaseName:DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Appointments',
    tableName:'appointments'
  });
  return Appointments;
};