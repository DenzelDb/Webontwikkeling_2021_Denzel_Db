 const sum =  (optelArray: Array<number>) => {
     let number = 0
    for (let i = 0; i < optelArray.length; i++){
        number += optelArray[i];
    }
    return number
 }

 const printToConsole = (number : number) : void => console.log(`the result is ${number}`);

 printToConsole(sum([100, 200, 300]));