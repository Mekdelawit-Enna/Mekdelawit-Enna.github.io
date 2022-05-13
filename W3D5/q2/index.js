const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));




app.get("/" , (req , res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
    
});


app.post('/result' , (req,res, next)=>{
    let name = req.body.name;
    let age =req.body.age;

    res.send(`Welcome ${name} ${age} `)
    

});






app.listen(4001 , ()=> {
    console.log("Server running.....");
});