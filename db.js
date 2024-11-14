const mongoose = require("mongoose");
var mongoURL ='mongodb+srv://add usernamehere :add password here@cluster0.xbisgqe.mongodb.net/mern-rooms'


mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected', ()=>{
    console.log(`Mongo DB Connection successfull`)
})

module.exports = mongoose


