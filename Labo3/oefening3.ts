const multiplyText = (amount: number, text: string, appendix?: string):string => {
    let result: string = ""
    for (let i:number = 0; i < amount; i++){
        result += text + " ";
    }
    if(appendix){
        return result + appendix;
    }
    else return result;
}
console.log(multiplyText(3, "flower", "!"));