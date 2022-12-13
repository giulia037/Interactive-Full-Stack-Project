const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Intermediate extends Model {}

Intermediate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    audiobook: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    iBook_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    collection_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'collection',
        key: 'id'
      }
    }

  },
  
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'intermediate',
  }
);

module.exports = Intermediate;
