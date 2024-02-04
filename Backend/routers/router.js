const express = require('express')
const router = express.Router()
const book = require('../model/book')
const monk= require('monk')

var db = monk('127.0.0.1:27017/FullStack')

router.post('/postdata', async(req,res)=>{
    let books;
    try{
        books = new book({
            fullname:req.body.send.fullname,
            biometricid:req.body.send. biometricid,
            designation:req.body.send.designation,
            mobilenumber:req.body.send.mobilenumber,
            busnumber:req.body.send. busnumber,
            routecode:req.body.send. routecode,
            adharnumber:req.body.send.adharnumber,
        })
        await books.save()
    }catch (err){
        console.log(err)
    }
    if(!books){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({books})

})

const dbo=db.get('books')

router.get('/',function(req, res, next){
    res.render('index', {title:'Express'});
});

router.get('/getData', function(req, res){
 dbo.find({}, function (err, docs){
    {
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    }
 })
})



module.exports=router;