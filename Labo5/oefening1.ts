const printStuff = (amount: number, text: string):void => console.log(`Hello ${text}, you are number ${amount}`);
//heeft een nummer en een string nodig en print de text met de gegeven data.
const twoDArray = (element1: string, element2: string): string[] => [element1, element2];
//maakt een "2d array" aan
const numberToString = (number: number): string => `${number}`;
//print een nummer uit als een string
printStuff(1, 'World'); //de data die bij printStuff moet meegegeven worden (console log staat bij de functie zelf)
console.log(twoDArray('element 1','element 2')); //vult de 2dArray met de twee gevraagde elementen
console.log(numberToString(100)); //zet deze nummer om naar een string