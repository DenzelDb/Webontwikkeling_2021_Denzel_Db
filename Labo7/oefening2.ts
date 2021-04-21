const fetch = require('node-fetch');

let a : any = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then((response:any) => response.json());;
let b : any = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then((response:any) => response.json());;
let c : any = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then((response:any) => response.json());;

Promise.all([a ,b ,c ]).then(
    (result) => {
    console.log(result[0].drinks[0].strDrink)
    console.log(result[1].drinks[0].strDrink)
    console.log(result[2].drinks[0].strDrink)
    })

export{};