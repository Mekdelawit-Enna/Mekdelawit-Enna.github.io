const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , 'public'))) ; //To serve static files such ass css , images .... or app.use('/static' ,express.static('public'))

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

const session = require('express-session');
app.use(session({
    secret : 'Mekdelawit',
    resave : false,
    saveUninitialized : false
}));

app.use(express.json());

app.get('/', (req, res) => {
res.render('index');
});

app.post('/result', (req, res, next) =>{
    let name = req.body.name;
    let age = req.body.age;
    req.session.name = name ;
    req.session.age = age;

    res.redirect('/output');
});
app.get('/output', (req, res, next) =>{
    let name = req.session.name;
    let age = req.session.age;
    res.send(`Welcome ${name} ${age}`);
});

app.listen(4001);