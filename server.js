// Express is a very useful framework which works with Nodejs to provide a back-end
// It takes care of routing URLs and organises your web application into the MVC architecture
// Its classified as middleware.
// Nodejs is basically a low-level server environment. Express makes it easy for you to write your application
// and to control what your application does.

var express = require('express');
	app = express();

// bodyParser is used to parse incoming HTTP requests (it extracts the body of the message), so that its easier
// for you to use
var bodyParser = require('body-parser');

// Since your files (like index.html, shop.html etc) are stored on your computer, the path module helps you work with 
// directories and files 
var path = require('path');

// Its a driver that allows you to access MySQL (which should be installed on your computer) and run queries/retrieve or write information
// to your databases	w3schools
var mysql = require('mysql');


// defines the necessary information required to open a connection to your database in MySQl
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});



// Caters to the HTTP get requests (when a client requests for a page from the server)
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/public/views/index.html');
});

app.get('/login', function(req, res){
	res.sendFile( path.join(__dirname , '../public/views/login.html'));

});


// An HTTP POST request means that the Client is sending some information, in this case, to usignup (user signing up)
// Ideally, you would save their details in your database, so that the next time they visit, they can log in and view any history
// they have - past orders, reviews etc.

app.post('/usignup', function(req, res) {

	//Connect to database
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	});



});




app.use('/js', express.static(__dirname + '/public/js'));

app.listen(3030, function(){
	console.log("Listening ... ");
});