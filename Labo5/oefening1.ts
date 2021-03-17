const printStuff = (amount: number, text: string):void => console.log(`Hello ${text}, you are number ${amount}`);

const twoDArray = (element1: string, element2: string): string[] => [element1, element2];

const numberToString = (number: number): string => `${number}`;

printStuff(1, 'World');
console.log(twoDArray('element 1','element 2'));
console.log(numberToString(100));