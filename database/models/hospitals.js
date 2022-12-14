'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Hospitals.hasOne(models.Doctors,{
        foreignKey: 'hospital_id',
        as:'hospital'
      })
    }
  }
  Hospitals.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hospitals',
    tableName: 'hospitals',
    underscored: true,
  });
  return Hospitals;
};