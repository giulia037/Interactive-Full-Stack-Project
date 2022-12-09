const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Advanced extends Model {}

Advanced.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'advanced',
  }
);

module.exports = Advanced;
