const multiplyText = (amount: number, text: string):string => {
    let result: string = ""
    for (let i:number = 0; i < amount; i++){
        result += text;
    }
    return result;
}
//let result: string = multiplyText(3, "flower");
console.log(multiplyText(3, "flower" + " "));