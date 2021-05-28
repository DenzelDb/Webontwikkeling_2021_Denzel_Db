const express = require('express');
const app = express();
const ejs = require('ejs');
const {MongoClient, ObjectId} = require('mongodb');
const uri = "mongodb+srv://DenzelDb:Webontwikkeling@webontwikkeling-ddb.jyws9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended:true}));

app.set('view engine', 'ejs'),
app.set('port', 3000);

interface Movies{
    name: string,
    myScore: number,
    Director: string,
    _id?: string
};

const maindbload = async() => {
    try {
        await client.connect();
    }
    catch (e){
        console.error(e)
    }
}
maindbload();

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));


app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.render('landing')
});

const renderAllMovies = async (res:any) => {
    let cursor = await client.db("WebOntwikkeling").collection("Movies").find({});
    let allMovies = await cursor.toArray();
    res.render('movies', {allMovies});
}

app.get('/movies',async (req:any,res:any)=>{
    try {
        renderAllMovies(res);
    } catch (e) {
        console.log(e)
    }
});

app.get('/movies/:x', async(req:any,res:any)=>{
    try {
        let x = req.params.x;
        let movie = await client.db("WebOntwikkeling").collection("Movies").findOne({_id:ObjectId(x)});
        res.render('movie', {movie:movie})
    } catch (e) {
        console.log(e)
    }
});

app.get('/removemovie/:x', async(req:any,res:any)=>{
    try {
        let x = req.params.x;
        let movie = await client.db("WebOntwikkeling").collection("Movies").removeOne({_id:ObjectId(x)});
        renderAllMovies(res)
    } catch (e) {
        console.log(e)
    }
});

app.get('/addmovie',(req:any,res:any)=>{
    res.render("addmovie", {info:undefined})
});

app.post('/addmovie',async (req:any,res:any)=>{
    try {
        let newMovie:Movies = {
            name: req.body.title,
            myScore: req.body.score,
            Director: req.body.director
        }
        await client.db("WebOntwikkeling").collection("Movies").insertOne(newMovie);
        renderAllMovies(res);
    } catch (e) {
        console.log(e)
    }
});

export{};