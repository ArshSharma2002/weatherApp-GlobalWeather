const express = require('express')
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = 80;


app.set('view engine','hbs');

app.use(express.static(path.join(__dirname,'../public')));


app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})