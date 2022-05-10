const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Post = sequelize.define(
  'post',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING },
    user_id: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
  }
);

module.exports = Post;
