var express = require('express');

// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost:27017/test', function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
// db.users.
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
    
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);
var hab=new User({first_name:"Habib", last_name:"Shaikh", email:"ddf@dfd.com"});
// Bootstrap express
var app = express();

// URLS management

app.get('/', function (req, res) {
    res.send("<a href='/users'>Show Users</a> <br> <a href='/usersSave'>Save User</a>");
});

app.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

app.get('/usersSave', function (req, res) {
	// save the user
	hab.save(function(err) {
		  if (err) throw err;
		  res.send("User Created");
		  console.log('User created!');
		});
});

//delete the user  CRUD   -> Create, Retrive,Delete
app.get('/usersDelete', function (req, res) {
User.find({ first_name: 'Habib' }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});

});
app.get('/users/:email', function (req, res) {
    if (req.params.email) {
        User.find({ email: req.params.email }, function (err, docs) {
            res.json(docs);
        });
    }
});

// Start the server
app.listen(8989);
