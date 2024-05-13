const { Sequelize } = require('sequelize');
const { Pool } = require('pg');
const { DATABASE_URL  } = process.env

const pool = new Pool({
    connectionString: DATABASE_URL,
});

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres', // Use the appropriate dialect for your database
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    define: {
        timestamps: false,
    },
});

module.exports = {
    sequelize,
}