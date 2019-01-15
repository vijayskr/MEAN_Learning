var mongoose = require('mongoose');
var cors  = require('cors');
var bodyparser = require('body-parser');
var express = require('express');

let multer = require("multer");
/*let gfs = require("multer-gridfs-storage")({
  url: "mongodb://localhost:27017/test"
});
*/
let grid = require("gridfs-stream");
grid.mongo = mongoose.mongo;


//var fs = require('fs');

var user = require('./models/users');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/test');
const connection = mongoose.connection;
mongoose.Promise = global.Promise;
//let gfs = grid(mongoose.connection.db);


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

/* FILE UPLOAD & DOWNLOAD */
// Setting up the storage element
let storage = require('multer-gridfs-storage')({
   url: 'mongodb://localhost:27017/test',

    filename: (req, file, cb) => {
        let date = Date.now();
        // The way you want to store your file in database
        cb(null, file.fieldname + '-' + date + '.'); 
    },
    
    // Additional Meta-data that you want to store
    metadata: function(req, file, cb) {
        cb(null, { originalname: file.originalname });
    },
    root: 'test' // Root collection name
});

// Multer configuration for single file uploads
let upload = multer({
    storage: storage
}).single('file');

// Route for file upload
app.post("/users/file/upload/:id", (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }
    res.json({ error_code: 0, error_desc: null, file_uploaded: true });
  });
});

//Delete File from MongoDB
app.get("/users/file/download/:id", (req, res) => {
  gfs.collection("ctFiles"); //set collection name to lookup into

  /** First check if file exists */
  gfs.files
    .find({ filename: req.params.filename })
    .toArray(function(err, files) {
      if (!files || files.length === 0) {
        return res.status(404).json({
          responseCode: 1,
          responseMessage: "error"
        });
      }
      // create read stream
      var readstream = gfs.createReadStream({
        filename: files[0].filename,
        root: "ctFiles"
      });
      // set the proper content type
      res.set("Content-Type", files[0].contentType);
      // Return response
      return readstream.pipe(res);
    });
});

/*
// Route for getting all the files
app.get('/files', (req, res) => {
    let filesData = [];
    let count = 0;
    gfs.collection('ctFiles'); // set the collection to look up into

    gfs.files.find({}).toArray((err, files) => {
        // Error checking
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // Loop through all the files and fetch the necessary information
        files.forEach((file) => {
            filesData[count++] = {
                originalname: file.metadata.originalname,
                filename: file.filename,
                contentType: file.contentType
            }
        });
        res.json(filesData);
    });
});
*/

app.use('/', router);
app.listen(4000, () => { 
    console.log('App Running in port 4000');
});
