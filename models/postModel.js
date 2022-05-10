const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Post = sequelize.define(
  'post',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Post;
