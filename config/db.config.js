const dotenv = require('dotenv');
dotenv.config();

const config = {
    db: {
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    }
};

module.exports = config;