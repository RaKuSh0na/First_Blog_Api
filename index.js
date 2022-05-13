const express = require('express');

const mongoose = require('mongoose');

const app = express(); //running express function

const port = 5000; // define port
const indexRouter = require('./routes/index')

app.use(express.urlencoded({extended:true})); //url encode is defined.
app.use(express.json()); // for json encoding /parsing

app.use(indexRouter)


//MongoDB coonection
const url = 'mongodb+srv://Rakin126:Rakin126@cluster0.ojwya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser : true}, ()=>{
    console.log("mongo connected");
});

app.listen(port,()=>{ console.log(`server is up on port ${port}`)});

















