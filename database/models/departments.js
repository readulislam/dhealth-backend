'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Departments.hasOne(models.Doctors,{
        foreignKey: 'department_id',
        as:'department'
      })
    }
  }
  Departments.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Departments',
    tableName: 'departments'
  });
  return Departments;
};