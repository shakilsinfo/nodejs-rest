const {createConnection} = require('mysql');
const dotenv = require("dotenv");
dotenv.config();
const pool = createConnection({
    port:process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10
});

module.exports = pool;