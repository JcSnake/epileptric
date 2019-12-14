const mysql = require('mysql');
const config = {
    host : 'localhost',
    user : 'root',
    password : '18276919',
    database : 'api'
};
const pool = mysql.createPool(config);

module.exports = pool;