"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TimeSlote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TimeSlote.init(
    {
      doctorId: {
        type: DataTypes.INTEGER,
        field: "doctor_id",
        references: {
          model: {
            tableName: "doctors",
          },
          key: "id",
        },
      },
      weekday: DataTypes.STRING,
      slots: DataTypes.JSONB,
     
      date: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "TimeSlote",
      tableName: "timeSlote",
    }
  );
  return TimeSlote;
};
