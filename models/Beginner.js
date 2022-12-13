const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Beginner extends Model {}

Beginner.init(
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    collection_id:{
      type: DataTypes.INTEGER,
      references:{
        model: 'collection',
        key: 'id'
      },
    },
    bBook_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
    }
    
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Beginner',
  }
);

module.exports = Beginner;
