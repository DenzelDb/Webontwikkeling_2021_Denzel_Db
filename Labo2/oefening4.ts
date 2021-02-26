let fizznummer: (string | number)[] = [];
let teller4: number = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        fizznummer.push('FizzBuzz');
    }
    else{
        if (i % 3 == 0){
            fizznummer.push('Fizz');
        }
        if (i % 5 == 0){
            fizznummer.push('Buzz');
        }
        if (i % 3 && i % 5){
            fizznummer.push(i);
        }
    }
}
while (teller4 <= fizznummer.length) {
    console.log(fizznummer[teller4]);
    teller4++;
}


