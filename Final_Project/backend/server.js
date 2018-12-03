var mongoose = require('mongoose');
var cors  = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

var user = require('./models/users');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/test');

const connection =mongoose.connection;

connection.once('open', () => {
    console.log('Connected to MongoDB in port 27017');
});

router.route('/users').get((req, res) => {
        user.find((err, users) => {
            if(err)
                console.log(err);
            else
                res.json(users);

            console.log(users);
        });
});

router.route('/users/add').post((req, res) => {
    let newUser = new user(req.body);
    console.log(newUser);
    
    newUser.save()
        .then(newUser => {
            res.status(200).json({'newUser': 'Added Successfully'});
        })
        .catch(err => {
            res.status(400).send('Not able to add user');
        });
});

router.route('/users/delete/:id').get((req, res) => {
    user.findByIdAndRemove({_id: req.params._id}, (err, users) => {
        if(err)
            res.json(err)
        else
            res.json('Successfully Deleted');
    });
});

app.use('/', router);
app.listen(4000, () => { 
    console.log('App Running in port 4000');
});
