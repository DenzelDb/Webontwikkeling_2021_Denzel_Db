let getallen: number[] = [];
let teller: number = 0;

for (let i = 100; i <= 200; i++) {
    getallen.push(i);
}
while (teller <= 100) {
    console.log(getallen[teller]);
    teller++;
}