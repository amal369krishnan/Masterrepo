const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const router = require('./Controllers/routers');


app = express();
app.use(express.json())
app.use(router);


//MongoDb Setup using mongoose
url = 'mongodb://127.0.0.1:27017/mydb'
mongoose.connect(url,{useNewUrlParser:true});
connection = mongoose.connection;
connection.on('open', ()=>{
    console.log('Mongoose Connected..!');
});

//server setup
port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server running at port "+port);
})