let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
    res.json(req.decoded);
});


module.exports = router;