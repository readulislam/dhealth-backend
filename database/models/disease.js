'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Disease.belongsTo(models.Departments,{
        foreignKey: 'department_id',
        as:'department'
      })
      models.Disease.hasOne(models.Appointments,{
        foreignKey: 'disease_id',
        as:'disease'
      })
    }
  }
  Disease.init({
    name: DataTypes.STRING,
    departmentId: {
        field:'department_id',
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "departments",
          },
          key: "id",
        },
      },
    description: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Disease',
    tableName:'diseases'
  });
  return Disease;
};