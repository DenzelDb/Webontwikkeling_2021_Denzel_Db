const chalk = require('chalk');
enum Color {
    red,
    green,
    blue,
}
const multiplyTextColor = (amount: number, text: string = "Default", color: Color, appendix?: string):void => {
    let result: string = ""
    for (let i:number = 0; i < amount; i++){
        result += text + " ";
    }
    if(appendix){
        result += appendix;
    }
    if(color == Color.red){
        console.log(chalk.red(result));
    }
}
multiplyTextColor(3, "flower", Color.red, "!");