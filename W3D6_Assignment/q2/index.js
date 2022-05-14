const express = require('express');
const app = express();
const path = require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,"view"));

app.get('/' , (req, res)=>{
    res.render('index');

});

app.post('/result' , (req, res , next)=>
{
    let name =req.body.name ;
    let age = req.body.age ;
    console.log(name);
    console.log(age);
    return res.render('result' , {name:name, age:age})
})

app.listen(3000);