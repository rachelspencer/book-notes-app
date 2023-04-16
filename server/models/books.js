//This file defines the structure of the 'user' table in the db

// Used to  define the data types for columns in the db table
const { DataTypes } = require('sequelize');
// Imports the Sequelize instance, used to define the data model and interact with the db
const { sequelize } = require('../util/database');
const { User } = require('./user');

module.exports = {

    Book: sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        cover: DataTypes.BLOB,
        note: DataTypes.STRING,
        quote:DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            references: {
              model: User,
              key: 'id'
            }
        }    
    })
};