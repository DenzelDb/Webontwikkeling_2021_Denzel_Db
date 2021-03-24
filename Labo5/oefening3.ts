let printCalculationResult = (a: number, b: number, func: Calculation):void => {  //callbackfunctie om te kiezen tussen add of mult
    console.log(func(a, b));
}

interface Calculation {(a:number, b:number):number}

let add : Calculation = (a, b) => a + b; //functie om a en b bij elkaar op te tellen

let mult : Calculation = (a, b) => a * b; //functie om a en b met elkaar te vermenigvuldigen

printCalculationResult(2,4,add); //print 6
printCalculationResult(2,4,mult); // print 8