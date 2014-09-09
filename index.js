var application_root=__dirname;
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var errorHandler=require("errorhandler");
var path=require("path");

var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(application_root, "dist/")));
app.use(errorHandler({dumpExceptions:true, showStack:true}));

app.set('port', (process.env.PORT || 5000));
console.log('port: '+app.get('port'));
app.set('view engine', 'html');
/*
app.get('/', function (req, res){
	res.render('client/');
});
*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});