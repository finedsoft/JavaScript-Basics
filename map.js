let scores = [90, 85, 78, 92];

let grades = scores.map(score => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    // more conditions...
});

// console.log(scores)
// console.log(grades)

let prices = [100, 200, 300, 400];

let discountedPrices = prices.map(price => price - price * 20/100);

console.log(prices)
console.log(discountedPrices)

let blogs = [
    { title: "JavaScript for Beginners", image: "js.png", body: "sample text" },
    { title: "CSS for Beginners", image: "css.png", body: "sample text" },
    { title: "HTML for Beginners", image: "html.png", body: "sample text" },
];

blogs.forEach((blog) => 
console.log(`<h1>${blog.title}</h1>`)
);
