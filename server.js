var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function(){
	console.log("listening on 8000");
});

require('./config/mongoose.js');
require('./config/routes.js')(app);