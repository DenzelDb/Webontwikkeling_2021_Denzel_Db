 interface Printer { //een interface voor gebruik bij verdere functies
     (num : number): void
 }
 
 const sum =  (optelArray: Array<number>, printToConsole: Printer, printToConsole2: Printer) => { //functie met 3 parameters
     let number = 0
    for (let i = 0; i < optelArray.length; i++){ //for loop die zo lang er nummers in de array staan, deze gaat optellen
        number += optelArray[i];
    }
    if (number < 10){       //if voor als het nummer kleiner is dan 10
        printToConsole2(number)
    }
    else {                  //else voor elk ander scenario
        printToConsole(number)
    }
    
 }

 const printToConsole: Printer = (number) => console.log(`the result is ${number}`); //gebruikt de printToConsole voor getallen hoger dan 10

 sum([1, 2, 3], printToConsole, (number) => console.log(`the result ${number} is a very small number`)); //gebruikt de printToConsole voor getallen lager dan 10