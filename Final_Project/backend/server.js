var mongoose = require('mongoose');
var cors  = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

//File Upload & Download
var gridfs = require("gridfs-stream");
var fs = require('fs');

var user = require('./models/users');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/test');
const connection = mongoose.connection;
mongoose.Promise = global.Promise;
gridfs.mongo = mongoose.mongo;

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

//Upload File to MongoDB
router.route('/users/file/upload/:id').get((req, res) => {
		
		var filename = req.query.filename;
        console.log('Inside Upload1');
        
        var writestream = gfs.createWriteStream({ filename: filename });
        fs.createReadStream(__dirname + "/uploads/" + filename).pipe(writestream);
        writestream.on('close', (file) => {
            res.json('Stored File: ' + file.filename);
        });
        res.json('Inside the function call');
        console.log('Inside Upload');
});

//Download File from MongoDB
router.route("/users/file/download/:id", (req, res) => {
  var filename = req.query.filename;

  gfs.exist({ filename: filename }, (err, file) => {
    if (err || !file) {
      res.status(404).send("File Not Found");
      return;
    }

    var readstream = gfs.createReadStream({ filename: filename });
    readstream.pipe(res);
  });
});	

//Delete File from MongoDB
 router.route("/users/file/delete/:id", (req, res) => {
   var filename = req.query.filename;

   gfs.exist({ filename: filename }, (err, file) => {
     if (err || !file) {
       res.status(404).send("File Not Found");
       return;
     }

     gfs.remove({ filename: filename }, err => {
       if (err) res.status(500).send(err);
       res.send("File Deleted");
     });
   });
 });

app.use('/', router);
app.listen(4000, () => { 
    console.log('App Running in port 4000');
});
