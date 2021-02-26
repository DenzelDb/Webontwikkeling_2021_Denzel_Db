let veelvouden: number[] = [];
let teller3: number = 0;

for (let i = 0; i <= 70; i++) {
    if (i % 7 == 0){
        veelvouden.push(i);
    }
}
while (teller3 <= veelvouden.length) {
    console.log(veelvouden[teller3]);
    teller3++;
}



