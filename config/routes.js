var friends = require('./../server/controllers/friends.js');

module.exports = function(app) {

    app.get('/friends', function(req, res) {
      friends.show(req,res)
    })
    app.post('/add', function(req,res){
    	friends.add(req,res)
    })
    app.delete('/destroy/:id', function(req,res){
    	console.log("in routes");
    	friends.destroy(req,res);
    })
};