"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cities.init(
    {
      stateId: {
        type: DataTypes.INTEGER,
        field:'state_id',
        references: {
          model: {
            tableName: "states",  
          },
          key:'id'
        },
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cities",
      tableName:'cities',
      underscored: true,
    }
  );
  return Cities;
};
