let names = ['joske','franske','donald','achmed']
let capitalNames1 = names.map(name => name.toUpperCase());

//let capitalNames2 = names.forEach(name => name.toUpperCase());
let capitalNames2: string[] = [];
names.forEach(name => capitalNames2.push(name.toUpperCase()))

console.log(capitalNames1)
console.log(capitalNames2)
