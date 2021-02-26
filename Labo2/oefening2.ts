enum regenboog {
    Rood,
    Oranje,
    Geel,
    Groen,
    Blauw,
    Indigo,
    Violet
}

let inVolgorde: regenboog[] = [];
let teller2: number = 0;

for (let i = 0; i <= 7; i++) {
    inVolgorde.push(i);
}
while (teller2 <= 7) {
    console.log(inVolgorde[teller2]);
    teller2++;
}
