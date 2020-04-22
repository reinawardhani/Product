var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var dir = path.join(__dirname, 'public');

var app = express();

//mongoose.connect('mongodb: ')

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

//var users = []


app.get('/', function(req, res){
	res.render('Courses', {
		title: 'Courses',
		//users: users
	});
})

app.listen(8080,function(){
	console.log('Server Started on Port 8080...')
})