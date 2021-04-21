const fetch = require('node-fetch');

const showAllDadJokes = async() => {
    for (let i=1; i<=3; i++){
        let jokes = await fetch(`https://icanhazdadjoke.com/search?term=dog&limit=5&page=${i}`, {
            headers: {
              'Accept': 'application/json'
            }
         })
        let jokesJson = await jokes.json();
        for (let d=0; d<5; d++){
            console.log(jokesJson.results[d].joke)
        }
    }
}

showAllDadJokes();

export{};