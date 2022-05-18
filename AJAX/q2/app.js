const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

var answers = ["It's certain" , "Yes" , "Outlook not so good" , "Don't count on it" , "Very Doubtful" ,
"My sources say no."];



app.get('/' , (req , res)=>{

    res.render('index');
}) ;


app.get('/8ball',(req, res)=> {

    const random = Math.floor(Math.random() * answers.length);
    res.send(answers[random]);
});
app.listen(3000);