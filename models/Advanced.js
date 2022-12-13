const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Collection = require('./Collection');

class Advanced extends Model {}

Advanced.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false,

    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    audiobook:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    aBook_id:{
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
    modelName: 'Advanced',
  }

);

module.exports = Advanced;
