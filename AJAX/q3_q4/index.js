const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const parseurl = require('parse-url');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './view'));
//app.use('css', express.static(path.join(__dirname, './css')));
app.use('/js', express.static(path.join(__dirname, './view/js')));
app.use(session({
    secret: 'salt',
    saveUninitialized: true,
    resave: false,
}));

app.use((req,res, next) =>{
  
    if(!req.session.cart)
    {
        req.session.cart = [];
    }
    next(); 

})

let product = [{"id": "123", "name": "Spachula", "description": "Great Spachula", "price": "10$"},
{"id":"124","name":"Plate","description":"Nice Plate","price":"4$"},
{"id":"125","name":"Knife","description":"Sharp Knife","price":"8$"},
];




app.get('/', (req,res, next)=>{
    res.redirect('/product');
})
app.get('/product', (req, res, next) =>{
   
    res.render('product', {product});
})
app.get('/cart', (req, res)=>{
    let cart = req.session.cart;
    res.render('shoppingcart', {cart});
})
app.post('/addToCart', (req, res)=>{

    let name = req.body.prodName;
    let price = parseInt(req.body.prodPrice);

    let cart = req.session.cart;
    let isPresent = false;
    let index;
    for(i in cart)
    {
        if(cart[i].name === name)
        {
            isPresent = true;
            index = i;
        }
    }
    if(isPresent)
    {
        cart[index].quantity +=1;
        cart[index].price += price;
    }
    else{
        cart.push({"name": name, "price":price, "quantity": 1});
    }

    res.redirect('/product');
});

app.post('/remove', function(req, res, next){
    let name = req.body.name;
    for(i in req.session.cart)
    {
        if(req.session.cart[i].name === name)
        {
            if(req.session.cart[i].quantity > 1)
            {
                req.session.cart[i].quantity -=1;
            }
            else{
                req.session.cart.splice(i, 1);
            }
            break;
        }
    }
    res.redirect('/cart');
})

app.listen(3000);