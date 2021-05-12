const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://DenzelDb:Webontwikkeling@webontwikkeling-ddb.jyws9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const main = async() => {
    try {
        await client.connect();
        let list = await client.db().admin().listDatabases();
        console.log(list)
        interface Movies{
            name: string,
            myScore: number,
            timesViewed: number
        }
        let movies: Movies[] = [
            {name: "The Matrix", myScore: 90, timesViewed: 10},
            {name: "Pulp Fuction", myScore: 100, timesViewed: 100},
            {name: "Monster Hunter", myScore: 5, timesViewed:1},
            {name: "Blade Runner", myScore: 100, timesViewed:30},
            {name: "Austin Powers", myScore: 80, timesViewed:10},
            {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
            {name: "Ichi the Killer", myScore: 80, timesViewed:1}
        ];
        await client.db('WebOntwikkeling').collection('Movies').insertMany(movies);
    } 
    catch (e){
        console.error(e)
    }
    finally {
        await client.close();
    }
}
main();

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('port', 3000);



app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));


app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.render('landing')
});

export{};