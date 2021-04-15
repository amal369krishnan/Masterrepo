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

app.use(cors({
    /*origin: 'http://localhost:3011/api/insert',
    credentials: true,*/
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,response)=>{
    
    const sqlquery = "SELECT * FROM TodoList_test.todolist";
    db.query(sqlquery,(err,result)=>{
        const data = JSON.stringify(result);
        response.send(data);
    });
    
});

app.post("/api/insert",(req, res)=>{
    /*res.send("post Loaded");
    res.send(req.body.items);*/
    
    const items = req.body.items;
    const sqlInsert = "INSERT INTO todolist(items) values(?)";
    db.query(sqlInsert,[items], (err, result)=>{
        res.send(`Added Successfully in the db with item name "${items}"`);
    });
});

app.post("/api/delete",(req,res)=>{
    const id = req.body.id;
    const sqlDelete = "Delete From todolist where id = ?";
    db.query(sqlDelete,[id], (err, result)=>{
        res.send("One row Deleted");
    })
});

app.post("/api/update",(req,res)=>{
    const id = req.body.id;
    const items = req.body.values;
    const sqlDelete = "Update todolist set items = ? where id = ?";
    db.query(sqlDelete,[items,id], (err, result)=>{
        res.send("Row Updated");
    })
});

app.listen(3011, ()=>{
    console.log("Running on the server 3011");
});