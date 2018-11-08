import productsApi from './products-api.js';

let products = productsApi.getAll();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let display = [];

for(var i = 0; i < 3; i++) {
    let index = getRandomInt(products.length);
    display.push(products[index]);
}

console.log(display);

