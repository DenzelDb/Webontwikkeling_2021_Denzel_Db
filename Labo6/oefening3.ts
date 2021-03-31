interface Pokemon {
    name: string
    xp: number
    type: string
}

let starterPokemonGen1 : Pokemon[] = [
    {name: 'Bulbasaur', xp: 30, type: 'grass'},
    {name: 'Charmander', xp: 50, type: 'fire'},
    {name: 'Squirtle', xp: 45, type: 'water'}
];
let starterPokemonGen2 : Pokemon[]  = [
    {name: 'Chikorita', xp: 30, type: 'grass'},
    {name: 'Cyndaquil', xp: 50, type: 'fire'},
    {name: 'Totodile', xp: 45, type: 'water'}
];

let starters = [...starterPokemonGen1,...starterPokemonGen2]
console.log(starters)

let names: string[] = starters.map(e => e.name);
console.log(names)

let weakPokemon : Pokemon[] = starters.filter((pokemon: Pokemon) => {
    return (pokemon.xp < 40)
})
console.log(weakPokemon)

let weakPokemonNames : string[] = starters
.filter(pokemon => pokemon.xp < 40)
.map(pokemon => pokemon.name)

console.log(weakPokemonNames)

let sumOfAllXp : number = starters.reduce((sum: number, pokemon: Pokemon) =>{
    return sum + pokemon.xp
},0)

console.log(sumOfAllXp)

let strongestPokemon : Pokemon = starters.reduce((currentStrongestPokemon: Pokemon, currentPokemon: Pokemon) => {
    if (currentPokemon.xp >= currentStrongestPokemon.xp){
        return currentPokemon
    }
    else{
        return currentStrongestPokemon;
    }
})

let sortedStarters = starters.sort((a: Pokemon, b: Pokemon) => {
    if (a.xp === b.xp){
        if (a.name > b.name){
            return 1
        }
        else{
            return -1
        }
    }
    if (a.xp > b.xp){
        return 1;
    }
    else {
        return -1;
    }
})