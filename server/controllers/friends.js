var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
	return {
		show: function(req,res){
			Friend.find({}, function (err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			})
		},
		add: function(req,res){
			console.log(req.body);
			var friend = new Friend({name: req.body.name, age: req.body.age});
			friend.save(function(err){
				if(err){
					console.log("you can't sit with us");
				}else{
					res.redirect('/');
				}
			})
		},
		destroy: function(req,res){
			Friend.remove({_id: req.params.id}, function (err, ok){
				if(err){
					console.log(err);
				}else{
				res.json(ok);
				console.log('deleted');
				}
			})
		}
	}
})();