const chalk = require('chalk')

interface ZoekGetal {
    (getallen: number[], getal: number): number
}

let getallen : number[] = [1, 3, 5, 7, 9, 13]

const zoekGetal : ZoekGetal = (getallen, getal) => {
    for (let i = 0; i <getallen.length;i++){
        if (getallen[i] === getal){
            return i;
        }
    }
    return -1;
}

console.log(zoekGetal(getallen, 3));

export {};

interface Person {
    name: string,
    age: number
}

interface ZoekPersonenMetLeeftijd {
    (personen: Person[], leeftijd: number): Person[]
}

interface PrintAllePersonen {
    (personen: Person[]): void
}

let personen: Person[] = [
    {
        name: 'Andie',
        age: 36
    },
    {
        name: 'Donald',
        age: 76
    },
    {
        name: 'Joe',
        age: 78
    },
    {
        name: 'Bompa',
        age: 75
    },
]

const zoekPersonenMetLeeftijd : ZoekPersonenMetLeeftijd = (personen, leeftijd) => {
    let personenMetLeeftijd = []
    for (let i = 0; i<personen.length;i++){
        if (personen[i].age === leeftijd){
            personenMetLeeftijd.push(personen[i])
        }
    }
    return personenMetLeeftijd;
}

const PrintAllePersonen : PrintAllePersonen = (personen) => {
    for (let i = 0; i < personen.length; i++) {
        console.log('${personen[i].age} ${personen[i].name}')
    }
}

const PrintAllePersonen2 : PrintAllePersonen = (personen) => {
    for (let i = 0; i < personen.length; i++) {
        console.log('${personen[i].name} ${personen[i].age}')
    }
}

const PrintAllePersonen3 : PrintAllePersonen = (personen) => {
    for (let i = 0; i < personen.length; i++) {
        console.log('${personen[i].age} ${personen[i].name}')
    }
}