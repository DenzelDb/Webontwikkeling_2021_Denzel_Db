let numbers1: number[] = [1,2,3];
let numbers2: number[] = [4,5,6];
let numbers3: number[] = [7,8,9];

let allNumbers = [...numbers1,...numbers2,...numbers3]
//console.log(allNumbers)
let extraNumbers = [...allNumbers, 10, 11, 12]
//console.log(extraNumbers)
let evenMoreNumbers = [-2, -1, 0, ...extraNumbers, 13, 14, 15]
//console.log(evenMoreNumbers)