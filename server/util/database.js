//This file defines a connection to a PostgreSQL db using the 'pg' module and the Sequelize Library.

// Library allows interaction with relationad db using JS.
const { Sequelize } = require('sequelize');
// Allows connection to PostgreSQL db and manage database connections.
const { Pool } = require('pg');
// Deconstructs environmental variables from process.env object. This info is needed to connect to the PostgreSQL db.
const { USER, PGHOST, DB_PORT, DATABASE, BIT_DB_PW, CONNECTION_STRING  } = process.env

//Creates a new 'Pool' object from the 'pg' library, using the extracted env variables to set the connection details.
const pool = new Pool({
    user: USER,
    host: PGHOST,
    database: DATABASE,
    password: BIT_DB_PW,
    port: DB_PORT,
    ssl: true,
})

//Creates a new instance of the Sequelize class using the CONNECTION_STRING env variable.
// dialect = specifies that the db being used is PostgreSQL
// dialectOptions = sets aditional options for the connection, like ssl config
// pool = specifies that the connection pool created above will be used for the Sequeliz instance
// define = specifies that the timestamp should not be invluded in the models by default
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
        }
    },
    pool,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
};