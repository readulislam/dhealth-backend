"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    static associate(models) {}
  }
  States.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "States",
      tableName:'states'
    }
  );
  return States;
};
