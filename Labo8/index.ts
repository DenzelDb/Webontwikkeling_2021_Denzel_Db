const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('port', 3000);

const thisisme = {
    name: 'Denzel De bruyn',
    age: 20,
    photo: 'https://i1.sndcdn.com/avatars-000898737085-id65d6-t500x500.jpg'
}



app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));


app.get('/whoami',(req:any,res:any)=>{
    res.type('text/html');
    res.render('thisisme', thisisme)
})

app.get('/whoamijson',(req:any,res:any)=>{
    res.json(thisisme)
})

app.get('/pikachujson',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
})

app.get('/pikachuhtml',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello <strong>World</strong>')
})

