const chalk = require('chalk');
enum color {
    red,
    green,
    blue,
}
const multiplyTextColor = (amount: number, text: string, color: color, appendix?: string):string => {
    let result: string = ""
    for (let i:number = 0; i < amount; i++){
        result += text + " ";
    }
    if(appendix){
        return result + appendix;
    }
    else return result;
}
console.log(multiplyText(3, "flower" + color.red +"!"));