let items: Array<number> = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87]

function search (items, n){
    return items.indexOf(n);
}
console.log(search(items, 18));
console.log(search(items, 111));