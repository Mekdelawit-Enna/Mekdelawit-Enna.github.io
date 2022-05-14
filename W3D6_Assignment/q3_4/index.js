const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'view'));

let products = [{name : "Toyota 2344" ,price:"67676" ,description : "Best car of 2022" , id : "5678"},
{name : "Toyota 6789" ,price:"1200" ,description : "Best car of 2020" , id : "5678"},
{name : "Toyota 2344" ,price:"67676" ,description : "Best car of 2022" , id : "5678"},
{name : "Toyota 6789" ,price:"1200" ,description : "Best car of 2020" , id : "5678"}];


let cartProducts = [{Name : "Toyota 2344" ,Price:"67676" ,Quantity : 3},
{Name : "Nissan" ,Price:"3200" ,Quantity : 1},
{Name : "Lexus" ,Price:"2100" ,Quantity : 2}
];

app.get('/' , (req, res)=>{
   
    res.render("product" , {products:products});

});


app.get('/shoppingcart' , (req , res ) => {

    res.render("shoppingcart" , {cartProducts : cartProducts});

});

app.listen(3000);