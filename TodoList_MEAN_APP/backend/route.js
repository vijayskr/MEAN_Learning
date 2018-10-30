const express = require('express');
const router = express.Router();

const Item = require('./itemSchema');

router.get('/items', (req, res, next)=>{
    Item.find((err, items)=> {
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }
    });
});

router.post('/item',(req, res, next)=>{

    var newItem= new Item({
        itemName: req.body.itemName,
        itemDone: req.body.itemDone
    });

    newItem.save((err)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Item has been saved successfully'});
        }
    });
});

router.put('/item/:id', (req, res, next)=>{
    Item.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set:{
                itemDone: req.body.itemDone
            }
        },
        (err, result)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        }
    );
});

router.delete('/item/:id',(req, res, next)=>{
    Item.remove({_id: req.params.id},
    (err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});



module.exports =router;