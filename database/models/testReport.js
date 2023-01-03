'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestReports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TestReports.belongsTo(models.Doctors,{
        foreignKey: 'doctor_id',
        as:'doctor'
      })
      models.TestReports.belongsTo(models.Patients,{
        foreignKey: 'patient_id',
        as:'patient'
      })  
      models.TestReports.belongsTo(models.Appointments,{
        foreignKey: 'appointment_id',
        as:'appointment'
      })  
      
    }
  }
  TestReports.init({
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
    name: DataTypes.STRING,
    

  }, {
    sequelize,
    modelName: 'TestReports',
    tableName:'testreports'
  });
  return TestReports;
};