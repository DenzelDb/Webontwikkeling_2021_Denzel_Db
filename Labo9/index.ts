const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('port', 3000);

let movies = [
    {name: "The Matrix", myScore: 90},
    {name: "Pulp Fiction", myScore: 100},
    {name: "Monster Hunter", myScore: 5},
    {name: "Blade Runner", myScore: 100}
];

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));


app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.render('landing')
});

app.get('/movies',(req:any,res:any)=>{
    res.type('text/html');
    res.render('movies', {movies})
});

app.get('/movies/:index',(req:any,res:any)=>{
    let index = req.params.index;
    res.type('text/html');
    res.render('movie', {movieName: movies[index].name, movieScore: movies[index].myScore})
});

export{};