// //This file defines the structure of the 'user' table in the db

// // Used to  define the data types for columns in the db table
// const { DataTypes } = require('sequelize');
// // Imports the Sequelize instance, used to define the data model and interact with the db
// const { sequelize } = require('../util/database');
// const { User } = require('./User');

// module.exports = {

//     Book: sequelize.define('book', {
//         // id: {
//         //     type: DataTypes.INTEGER,
//         //     autoIncrement: true,
//         //     allowNull: false,
//         //     primaryKey: true
//         // },
//         coverUrl: DataTypes.STRING(2000),
//         title: DataTypes.STRING,
//         author: DataTypes.STRING,
//         userId: {
//             type: DataTypes.INTEGER,
//             references: {
//               model: User,
//               key: 'id'
//             } 
//         },
//         // bookCoverId: {
//         //     type: DataTypes.INTEGER,
//         //     references: {
//         //       model: BookCovers,
//         //       key: 'id'
//         //     }, 
//         // }    
//     })
// };