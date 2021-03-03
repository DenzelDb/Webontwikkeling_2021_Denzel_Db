let woord: string = "hello";

const reverse =  (tekst: string):string => {
    return tekst.split('').reverse().join('');
}
console.log(reverse(woord));