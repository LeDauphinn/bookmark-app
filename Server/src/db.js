// db.js
const mysql = require('mysql2');

const connectionWithoutPromise = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: '12345',
  database: '411_bookmark_db',
  port: 3307,
  multipleStatements: true
});

const connection = connectionWithoutPromise.promise();
module.exports = connection;
