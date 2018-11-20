var express =require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Issue = require ('./models/issue');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/test');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Connection is Successful with MongoDB");
});

router.route('/issues').get((req, res) => {
    Issue.find((err, issue) => {
        if(err)
            console.log(err);
        else
            res.json(issue);

        console.log(issue);
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById({_id: req.params.id}, (err, issue) => {
        if(err)
            console.log(err);
        else {
            res.json(issue);
        }
            
    });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);

    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added Successfully'});

        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/issues/edit/:id').post((req, res) =>{
        Issue.findById({_id: req.params.id}, (err, issue) => {
        if(!issue)
            return next(new Error('Could not load document'));
        else
        {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
    
            issue.save().then(issue => {
                res.json('Update Done!');        
            }).catch(err => {
                res.status(400).send('Update Failed');
            });
        }
    });
});


router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if(err)
            res.json(err);
        else
            res.json('Removed Successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log("Express is running on 4000"));
