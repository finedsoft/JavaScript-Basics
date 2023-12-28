let productList = [
    { name: 'Product A', price: 50, insertedAt: '2022-01-01' },
    { name: 'Product B', price: 30, insertedAt: '2022-02-01' },
    { name: 'Product C', price: 40, insertedAt: '2022-01-15' },
    { name: 'Product D', price: 20, insertedAt: '2022-02-15' },
    { name: 'Product E', price: 10, insertedAt: '2022-01-10' }
];

productList.sort((a, b) =>  new Date(b.insertedAt) - new Date(a.insertedAt));

console.log(productList);