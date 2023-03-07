// get the client
const mysql = require('mysql2');

// create the connection to database
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lovelyhill_db'
});

module.exports = Connection