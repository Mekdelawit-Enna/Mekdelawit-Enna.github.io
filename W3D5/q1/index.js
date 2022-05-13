const express = require('express');
const app = express();

app.get('/' , (req , res) =>{
    let name = req.query.name;
    let age = req.query.age;
    if(!name && !age)
    {
        name= "person";
        age = 'age  is not provided'
    }
    res.send(`Welcome ${name} and ${age}`);
});

app.listen(4000 , ()=>{

    console.log("Running server");
});