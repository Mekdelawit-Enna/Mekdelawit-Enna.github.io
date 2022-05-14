const express =  require('express');
const path = require('path');
const app = express();

app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname , "view"));
app.use(express.static(__dirname + '/public'));

let css_href;
app.get('/',(req , res)=>{
    const date = new Date();
    if(date.getHours() > 6 && date.getHours() < 18 )
        css_href = 'css/day.css';
    else 
        css_href = 'css/night.css';
    res.render("index" ,{time : date.toTimeString() , css_href : css_href });
});

app.listen(3000);