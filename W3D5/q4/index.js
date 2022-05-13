const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/css', express.static(path.join(__dirname, 'css')));



app.get('/', (req, res) => {

let css_;
const date_ = new Date();
const hour = date_.getHours();

if(hour > 6 && hour < 18)
{
    css_ = "/css/day.css";
}
else
{
    css_ = "/css/night.css";
}
console.log(hour);
res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="${css_}">
            </head>
            <body>
            <form action="/result" method = "POST">
            <span style="margin-right:10px;">
                <label >Name</label>
            </span>
            <span style="margin-right:10px;";>
                <input name="name" type="text">
            </span>
            <span style="margin-right:10px;";>
                <label>Age</label>
            </span>
            <span style="margin-right:10px;";>
                <input name="age" type="text">
            </span>
            <span style="margin-right:10px;">
                <input type="submit" name="Submit Query">
            </span>
            </body>
            </html>` );
});
app.post('/result', (req, res, next) =>{
    let name = req.body.name;
    let age = req.body.age;
    res.redirect(`/output?name=${name}&age=${age}`);
});
app.get('/output', (req, res, next) =>{
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Welcome ${name} ${age}`);
});
app.listen(4001);