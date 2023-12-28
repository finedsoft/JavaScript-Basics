let products = [
    { id: 1, name: 'Samsung Galaxy S21'},
    { id: 2, name: 'Iphone 12'},
    { id: 3, name: 'Redmi Note 10'},
    { id: 4, name: 'Samsung Galaxy S20'},
    { id: 5, name: 'Iphone 11'},
    { id: 6, name: 'Redmi Note 9'},
];

let product = products.filter(p => p.name.startsWith("Iphone"));

console.log(product);

product = products.find(p => p.name.startsWith("Iphone"));

console.log(product);