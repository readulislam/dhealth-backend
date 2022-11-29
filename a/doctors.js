"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctors.init(
    {
      name: DataTypes.STRING,
      contactNo: DataTypes.STRING,
      education: DataTypes.STRING,
      designation: DataTypes.STRING,
      img: DataTypes.STRING,
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
      hospitalId: {
        type: DataTypes.INTEGER,
        field:'hospital_id',
        references: {
          model: {
            tableName: "hospitals",
          },
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Doctors",
      tableName: "doctors",
    }
  );
  return Doctors;
};
