const express = require('express');
const router=express.Router();


//Item Model
const Item=require('./../../models/item');
console.log(Item)
// @route get api/items
// @desc get all/items

router.get('/items',(req,res)=>{
    Item.find()
    .then(Item => {
      console.log(Item) 
      res.json(Item)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//@route post api/items
//@desc add a item
router.post('/items',(req,res)=>{
    const newItem= new Item({
        name : req.body.name
    });
    newItem.save()
    .then(Item=>res.json(Item))
    .catch(err => res.status(400).json('Error: ' + err));
});

//@route delete api/items
//@desc delete item
router.delete('/items/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(Item => Item.remove().then(()=> res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});
module.exports=router;