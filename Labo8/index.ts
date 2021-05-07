const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.set('port', 3000);

const thisisme = {
    name: 'Denzel De bruyn',
    age: 20,
    photo: 'https://i1.sndcdn.com/avatars-000898737085-id65d6-t500x500.jpg'
}

let pikachu = {
    
}

fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((response:any) => response.json())
.then((response:any) => {
    pikachu = response
})

app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.render('Hello <strong>World</strong>')
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
    res.json(pikachu)
})

app.get('/pikachuhtml',(req:any,res:any)=>{
    res.render('pikachu', pikachu)
})

export{};