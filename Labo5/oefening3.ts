let printCalculationResult = (a: number, b: number, func: Calculation):void => {
    console.log(func(a, b));
}

interface Calculation {(a:number, b:number):number}

let add : Calculation = (a, b) => a + b;

let mult : Calculation = (a, b) => a * b;

printCalculationResult(2,4,add); //print 6
printCalculationResult(2,4,mult); // print 8