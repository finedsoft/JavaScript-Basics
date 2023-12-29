
let array = [1, 2, 3, 4, 5];
let sum = array.reduce((a, b) => a + b, 0);
console.log(sum); // Outputs: 15


let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
let count = fruits.reduce((accumulator, fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1;
    return accumulator;
}, {});
console.log(count);


let electronics = [
    { type: 'phone', name: 'Samsung Galaxy S10' },
    { type: 'laptop', name: 'Asus Zenbook' },
    { type: 'phone', name: 'iPhone 11' },
    { type: 'laptop', name: 'Macbook Pro 16' }
];

let groupedElectronics = 
electronics.reduce((groups, item) => {
    let key = item.type;
    if (!groups[key]) {
        groups[key] = [];
    }
    groups[key].push(item);
    return groups;
}, {});
