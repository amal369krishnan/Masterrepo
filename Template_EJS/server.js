const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 4001;

app = express();
app.use(cors());
//app.use(bodyParser());
//console.log(path.join(__dirname,'views'))
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.get("/",(request, response)=>{
    response.render("index",{name:"Amal",persons:["Praveen","Arun","Karthik","Chanchel"]});
});

app.listen(port,()=>{
    console.log(`Server loaded in the port : ${port}`);
})
