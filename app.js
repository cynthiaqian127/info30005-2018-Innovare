var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); // HAVEN'T ADDED app.use() yet
var flash = require('express-flash-messages');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Database setup
require('./models/db.js')

// For sessions
app.use(session({secret: "topsecret", resave:false, saveUninitialized:true}));


//For flash messages
app.use(flash());

app.set('view engine','ejs');

var router = require('./routes/routes.js');
app.use(router);
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/public'));


// Start the server
var PORT = process.env.PORT||3000;
app.listen(PORT, function(){
    console.log('Express listening on port 3000npm ');
});

