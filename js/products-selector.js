import productsApi from '../js/products-api.js';

let products = productsApi.getAll();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let display = [];

while(display.length < 3) {
    let index = getRandomInt(products.length); 
    if(display.includes(products[index]) === false) {
        display.push(products[index]);
    } 
}

console.log(display);


// for(var i = 0; i < 3; i++) {
//     let index = getRandomInt(products.length);
//     let item = products.splice(index, 1);
//     display.push(item);
// }