const { DataTypes } = require('sequelize');
const { db } = require('../config/db_pgsql');

const User = db.define(
  "User",
  {
    userId: {
      field: "user_id",
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      field: "email",
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      field: "password",
      type: DataTypes.STRING,
      allowNull: false,
    },
    logged: {
      field: "logged",
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // By default, users are not logged in
    },
    admin: {
      field: "admin",
      type: DataTypes.BOOLEAN,
    },
    acceso: {
      field: "acceso",
      type: DataTypes.BOOLEAN,
    },
    contacto: {
      field: "contacto",
      type: DataTypes.INTEGER,
    },
    delegacion: {
      field: "delegacion",
      type: DataTypes.STRING,
    },
    asesor: {
      field: "asesor",
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

// User.sync();

module.exports = { User };