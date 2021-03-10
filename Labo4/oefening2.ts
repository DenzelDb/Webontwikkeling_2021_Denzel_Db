interface Movie {
    title:string,
    year:number,
    actors:Array<string>
    metascore:number
    seen:boolean
}

let thematrix:Movie = {
    title: "The Matrix",
    year: 1999,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    metascore: 73,
    seen: true
}

let favoriteMovie:Movie = {
    title: "Daredevil",
    year: 2018,
    actors: ["Charlie Cox", "Vincent D'Onofrio", "Jon Bernthal"],
    metascore: 72,
    seen: true
}

let worstMovie:Movie = {
    title: "2 Fast 2 Furious",
    year: 2003,
    actors: ["Cole Hauser", "Paul Walker", "Tyrese Gibson"],
    metascore: 38,
    seen: true
}
