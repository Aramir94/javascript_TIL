const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : '1234',
  database : 'test1'
});

connection.connect();

connection.query('SELECT * from test', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();