// the file that connects to Mongo DB and loads all the models

var mongoose = require('mongoose');

var fs = require('fs');

mongoose.connect('mongodb://localhost/FullMean_Friends');

var models_path = __dirname + '/../server/models'

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})