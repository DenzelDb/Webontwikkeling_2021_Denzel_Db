 interface Printer {
     (num : number): void
 }
 
 const sum =  (optelArray: Array<number>, printToConsole: Printer, printToConsole2: Printer) => {
     let number = 0
    for (let i = 0; i < optelArray.length; i++){
        number += optelArray[i];
    }
    if (number < 10){
        printToConsole2(number)
    }
    else {
        printToConsole(number)
    }
    
 }

 const printToConsole: Printer = (number) => console.log(`the result is ${number}`);
 /*const printToConsole2: Printer = (number) => console.log(`the result ${number} is a very small number`);

 sum([1, 2, 3], printToConsole, printToConsole2);*/
 sum([1, 2, 3], printToConsole, (number) => console.log(`the result ${number} is a very small number`));