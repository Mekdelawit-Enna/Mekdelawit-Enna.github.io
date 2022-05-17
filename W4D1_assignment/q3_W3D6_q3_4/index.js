const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname , 'public'))) ; //To serve static files such ass css , images .... or app.use('/static' ,express.static('public'))

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'view'));


const session = require('express-session');
var MemoryStore = require('session-memory-store')(session);
app.use(session({
    secret : 'Mekdelawit',
    store: MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
      }),
    resave : false,
    saveUninitialized : false
}));



let products = [{name : "Lexus" ,price:"6767$" ,description : "Best car of 2022" , id : "1111" ,url : '/images/lexus.jpg' },
{name : "Toyota" ,price:"1200$" ,description : "Best car of 2020" , id : "2222" , url : '/images/Toyota.jpg'},
{name : "Marchedez Benz" ,price:"6000$" ,description : "Best car of 2022" , id : "3333" , url : '/images/Marchedez.jpg'},
{name : "Volce Wagen" ,price:"1500$" ,description : "Best car of 2020" , id : "4444" , url : '/images/Volsewagen.jpg'}];


let cartProducts = [];


app.get('/' , (req, res)=>{
   
    res.render("product" , {products:products});

});




app.get('/shoppingcart' , (req , res ) => {

    let myCart = req.session.cart ;
    //console.log(myCart);
    
    res.render("shoppingcart" , {cartProducts : myCart});

});


app.post('/remove' , (req, res , next) =>{

    let product_name = req.body.prodName;
    let index = cartProducts.findIndex((x)=> x.Name === product_name);
    //cartProducts.forEach((x)=> console.log(x.Name));
   
    cartProducts[index].Quantity -= 1;

    // if(index > -1)
    //     cartProducts.splice(index , 1);

    if(cartProducts[index].Quantity == 0)
        cartProducts.splice(index , 1);
       

    res.redirect('/shoppingcart');
});

app.post('/addtocart' , (req, res , next)=>{
   
    
    if(req.session.cart && req.session.cart.Name == req.body.name){

        console.log(req.session.cart.Name);
        req.session.cart.Quantity+=1 ;

    }
       
    else
        {

        req.session.cart = {Name : req.body.name , Price : req.body.price , Quantity : 1};
        req.session.save();
     
        }
    res.redirect('/shoppingcart' );   //end("It worked");    //
});

app.listen(3000);