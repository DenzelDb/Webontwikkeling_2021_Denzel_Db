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

const wasMovieMadeInThe90s = (movie:Movie):boolean => {
    if(movie.year < 2000){
        return true;
    }
    else {
        return false;
    }
}

console.log(wasMovieMadeInThe90s(thematrix));
console.log(wasMovieMadeInThe90s(favoriteMovie));

const avgMetaScore = (movies : Array<Movie>) : number => {
    let totalScore : number = 0;
    for (let i = 0; i < movies.length; i++){
        totalScore += movies[i].metascore;
    }
    return totalScore / movies.length;
}

console.log(avgMetaScore([thematrix, favoriteMovie, worstMovie]));

const fakeMetaScore = (movie : Movie, newscore : number) : Movie => {
    movie.metascore = newscore;
    return movie;
}

console.log(fakeMetaScore(favoriteMovie, 100));

