const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const app = express();


const mysql = require('mysql');
const db = mysql.createPool({
    host:'192.168.2.83',
    user:'toobler',
    password:'password',
    database:'TodoList_test',
})

app.get("/",(req,res)=>{
    
    const sqlInsert = "INSERT INTO todolist(items) values('Bathing')";
    db.query(sqlInsert, (err, result)=>{
        res.send(result);
    
    });
});

app.use(cors({
    /*origin: 'http://localhost:3011/api/insert',
    credentials: true,*/
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/insert",(req, res)=>{
    /*res.send("post Loaded");
    res.send(req.body.items);*/
    
    const items = req.body.items;
    const sqlInsert = "INSERT INTO todolist(items) values(?)";
    db.query(sqlInsert,[items], (err, result)=>{
        res.send(`Added Successfully in the db with item name "${items}"`);
    });
});


app.listen(3011, ()=>{
    console.log("Running on the server 3011");
});