const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    fullname:{
        type:String,
        require:true
    },
    biometricid:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    mobilenumber:{
        type:String,
        require:true
    },
    busnumber:{
        type:String,
        require:true
    },
    routecode:{
        type:String,
        require:true
    },
    adharnumber:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('books',bookSchema)