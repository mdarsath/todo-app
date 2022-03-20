let exp = require('express');
const json = require('formidable/src/plugins/json');
let router=exp.Router();
let db= require('./schema')

//create 

router.post('/post',function(req,res){
    let data = new db(req.body);
    data.save((err,doc)=>{
        if(err) throw err;
        res.json(doc)
    })
})

//read
router.get('/find',(req,res)=>{
    db.find((err,doc)=>{
        if(err) throw err;
        res.json(doc)
    })
})

//update
router.put("/update/:id",(req,res)=>{
    db.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,doc)=>{
        if(err) throw err;
        res.json(doc)
    })
})


//delete
router.delete("/delete/:id",(req,res)=>{
    db.findByIdAndDelete(req.params.id,(err,doc)=>{
        res.json(doc)
    })
    
})
module.exports=router