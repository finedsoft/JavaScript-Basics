const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c = ["a", 'b']

let b = a.splice(3, 0, ...c)

console.log(a)
console.log(b)