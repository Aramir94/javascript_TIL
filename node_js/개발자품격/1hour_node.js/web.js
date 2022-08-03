const express = require('express');
const app = express();

const server = app.listen(3000, () => {
	console.log('start server : localhost:3000');
});

// requesting
// responding
// routing
app.set('views', __dirname + '/views');
// npm install ejs
app.set('view engine', 'ejs'); //embedded javascript -> html 안에서 javascript 사용
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.html');
});
app.get('/about', function(req, res){
	res.send('about page')
});


//npm install mysql -save
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit : 10,
	host : '127.0.0.1',
	user : 'user',
	password : '1234',
	database : 'test1'
});

// 라우터 만들기
app.get("/db", function(req, res){
	pool.getConnection(function(err, connection){
		if (err) throw err;// not connected

	// use the connection
	connection.query('select * from test', function(err, results, fields){
		res.send(JSON.stringify(results));
		console.log('results', results);
		
		// When done with the connection, release it.

		// Handle error after the release.
		if (error) throw error;

		// Dont 'use the connection here it has been returned to the pool.
	});
	});
})