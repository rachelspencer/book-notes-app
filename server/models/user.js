// //This file defines the structure of the 'user' table in the db

// // Used to  define the data types for columns in the db table
// const { DataTypes } = require('sequelize');
// // Imports the Sequelize instance, used to define the data model and interact with the db
// const { sequelize } = require('../util/database.js');

// module.exports = {
//     // Defines a new model for a 'User' objext. Takes 2 arguments: name of the model ('user') and an object containing the column definitions
//     User: sequelize.define('user', {
//         // Defines 'user' table with three columns: id, username, hashPass and its contraints 
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         username: DataTypes.STRING,
//         hashedPass:DataTypes.STRING
//     })
// };