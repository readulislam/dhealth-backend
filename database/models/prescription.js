'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Prescription.belongsTo(models.Patients,{
        foreignKey: 'patient_id',
        as:'patient'
      })  
      models.Prescription.belongsTo(models.Doctors,{
        foreignKey: 'doctor_id',
        as:'doctor'
      })
      models.Prescription.belongsTo(models.Appointments,{
        foreignKey: 'appointment_id',
        as:'appointment'
      })  
    }
  }
  Prescription.init({
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
    appointmentId: {
        type:DataTypes.INTEGER,
        field:'appointment_id',
        references:{
          model: {
            tableName: 'appointments'
          },
          key:'id'
        }
      },
    link: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Prescription',
    tableName:'Prescription',
    timestamps:true,
    createdAt:false,
    updatedAt:'updateTimeStamp'
  });
  return Prescription;
};