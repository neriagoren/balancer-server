require('dotenv').config();
const mysql = require('mysql2');
const config = require('./config/db.config');

let pool = mysql.createPool(config.db);

module.exports = {
    pool
}