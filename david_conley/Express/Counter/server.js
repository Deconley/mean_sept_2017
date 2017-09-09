var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

//set
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//use
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true
 }));

//routes
app.get('/', function(req, res){
	if(req.session.counter){
		req.session.counter += 1
	}
	else{
		req.session.counter = 1
	}

	context = { counter: req.session.counter }
	return res.render('index', context)
})

app.post('/plus2', function(req, res){
		req.session.counter +=1

		res.redirect('/')
})

app.post('/resetcounter', (req, res) => {
	req.session.counter = 0

	res.redirect('/')
})

//always on bottom
app.listen(8000, () => {
	console.log("Listening on port 8000")
})
