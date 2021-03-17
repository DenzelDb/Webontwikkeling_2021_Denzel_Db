const calculateDogAge = (leeftijd: number):number => {
    return calculateAnimalAge(leeftijd);
}

const calculateAnimalAge = (leeftijd: number, maalJaren: number = 7):number => {
    let dierenLeeftijd = leeftijd * maalJaren;
    return dierenLeeftijd;
}

const calculateAnimalAgeFunctional = (maalJaren: number) => ((leeftijd) => {return calculateAnimalAge(leeftijd, maalJaren);});

const calculateHamsterAge = calculateAnimalAgeFunctional(26);

console.log(calculateAnimalAge(11, 2));
console.log(calculateDogAge(7));
console.log(calculateHamsterAge(.5));