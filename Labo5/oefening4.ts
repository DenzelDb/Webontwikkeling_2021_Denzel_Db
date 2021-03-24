const calculateDogAge = (leeftijd: number):number => { //gebruikt calculateAnimalAge zonder maalJaren, waardoor deze automatisch *7 wordt gedaan
    return calculateAnimalAge(leeftijd);
}

const calculateAnimalAge = (leeftijd: number, maalJaren: number = 7):number => { //doet de ingegeven leeftijd * het aantal jaren
    let dierenLeeftijd = leeftijd * maalJaren;
    return dierenLeeftijd;
}

const calculateAnimalAgeFunctional = (maalJaren: number) => ((leeftijd) => {return calculateAnimalAge(leeftijd, maalJaren);}); //een functie die de leeftijd kan berekenen

const calculateHamsterAge = calculateAnimalAgeFunctional(26); //de functie wordt gebruikt door een nieuwe functie

console.log(calculateAnimalAge(11, 2)); //doet 11 * 2
console.log(calculateDogAge(7)); //doet 7 * 7
console.log(calculateHamsterAge(.5)); //doet de value die bij calculateFunctional staat maal de value die hier staat