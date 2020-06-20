const mysql = require('mysql');
const dotenv = require('dotenv').config({path: './.env'});

const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    database        : process.env.DB_DATABASE,
    port            : process.env.DB_PORT
});


module.exports = pool