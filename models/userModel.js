const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'user',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    profile_pic: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
  }
);

module.exports = User;
