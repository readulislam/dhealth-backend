"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
        models.Admin.belongsTo(models.Hospitals,{
            foreignKey: 'hospital_id',
            as:'hospital'
          })
    }
  }
  Admin.init(
    {
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
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      superAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Admin",
      tableName:'admin'
    }
  );
  return Admin;
};
