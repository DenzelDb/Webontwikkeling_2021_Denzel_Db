const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}

const slowDiv = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        if (b != 0){
            setTimeout(() => {
                resolve(a/b);
            },2000)
        }
        else{
            reject("You cannot divide by zero")
        }
        
    });
}

slowSum(1, 5).then((result: any) => {console.log(`1 + 5 = ${result}`)})
slowSum(1, 5).then((result: any) => {slowMult(result, 2).then((resultMult: any) => {console.log(`(1 + 5) * 2 = ${resultMult}`)})})

slowDiv(6, 0).then((result : any) => {console.log(`6 / 0 = ${result}`)}).catch((result : any) => {console.log(result)})

slowDiv(6, 3).then((result : any) => {console.log(`6 / 3 = ${result}`)}).catch((error : any) => {console.log(error)})




export{};