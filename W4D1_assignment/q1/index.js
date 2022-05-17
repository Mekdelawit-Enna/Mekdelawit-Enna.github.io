const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , 'public'))) ; //To serve static files such ass css , images .... or app.use('/static' ,express.static('public'))

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/' , (req ,res) =>{

    res.render('index' , {items : req.cookies});
});

app.post('/addcookie' , (req ,res , next) =>{
    let key = req.body.key ;
    let value = req.body.value ;

    res.cookie(key , value);
    res.redirect('/');
});


app.listen(4001 , ()=>{ console.log("Server loading on port 4001.")});