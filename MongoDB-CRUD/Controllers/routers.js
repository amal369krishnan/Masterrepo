const express = require('express');
const router = express.Router();
const model = require('../Model/model');

router.get('/',async(req,res)=>{
    
    try{
        const modelItems = await model.find();
        res.json(modelItems);
    }catch(err){
        res.send(err);
    }
    
});

router.get('/:id',async(req,res)=>{
    
    try{
    const result = await model.findById(req.params.id);
    res.json(result);
    }
    catch(err){
        res.send(""+err.name);
    }
});

router.post('/',async(req,res)=>{

    const addItems = new model({
                                items : req.body.items
                                });
    try{
        const serverResult = await addItems.save();
        res.json(serverResult);
    }catch(err){
        res.send(err);
    }});

router.put('/:id',async(req,res)=>{
    
    try{
        const item = await model.findById(req.params.id);
        item.items = req.body.items;
        const result = await item.save();
        res.json(result);
        }
        catch(err){
            res.json(err);
        }
    });

router.delete('/:id',async(req,res)=>{
    const item = await model.remove({_id:req.params.id});
    res.json(item);
})


module.exports = router