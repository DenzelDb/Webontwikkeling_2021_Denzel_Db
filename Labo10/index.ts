const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://DenzelDb:Webontwikkeling@webontwikkeling-ddb.jyws9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


interface Movies{
    name: string,
    myScore: number,
    timesViewed: number
}
/*let movies: Movies[] = [
    {name: "The Matrix", myScore: 90, timesViewed: 10},
    {name: "Pulp Fiction", myScore: 100, timesViewed: 100},
    {name: "Monster Hunter", myScore: 5, timesViewed:1},
    {name: "Blade Runner", myScore: 100, timesViewed:30},
    {name: "Austin Powers", myScore: 80, timesViewed:10},
    {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
    {name: "Ichi the Killer", myScore: 80, timesViewed:1}
];*/

const main = async() => {
    try {
        await client.connect();
        let list = await client.db().admin().listDatabases();
        console.log(list)
        //await client.db('WebOntwikkeling').collection('Movies').deleteMany({});
        console.log("FIRST MOVIE")
        //await client.db('WebOntwikkeling').collection('Movies').insertMany(movies);
        
        let result : Movies = await client.db('WebOntwikkeling').collection('Movies').findOne({});
        console.log(result.name)
        console.log("MOVIESCORES")
        let result2 : Movies[] = await client.db('WebOntwikkeling').collection('Movies').find({}).toArray();
        for (let i=0;i<result2.length;i++) {
            console.log(result2[i].myScore);
        }

        console.log("TOTALVIEWS")
        let totaal = 0;
        for (let i=0;i<result2.length;i++) {
            result2[i].timesViewed
            totaal += result2[i].timesViewed
        }
        console.log(totaal)

        console.log("TUSSEN 30 EN 85")
        let result3 : Movies[] = await client.db('WebOntwikkeling').collection('Movies').find({myScore: {$gt: 30, $lt: 85}}).toArray();
        for (let i=0;i<result3.length;i++) {
            console.log(result3[i].name);
        }

        console.log("TUSSEN 30 EN 85 / 1X VIEWED")
        let result4 : Movies[] = await client.db('WebOntwikkeling').collection('Movies').find({myScore: {$gt: 30, $lt: 85}, timesViewed: 1}).toArray();
        for (let i=0;i<result4.length;i++) {
            console.log(result4[i].name);
        }
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