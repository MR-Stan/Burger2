require('dotenv').config();

const dotenvJSON = require('dotenv-json')
dotenvJSON({ path: "./config/.env.json" });

const keys = require('../keys.js');

const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    // JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: keys.server.password,
        database: 'burger_db'
    })
};

module.exports = connection;