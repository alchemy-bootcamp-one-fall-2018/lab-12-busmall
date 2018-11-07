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

import html from './html.js';

//creating template and what gets placed in template
function makeTemplate() {
    return html`
        <h1> Survey page </h1>
        <section>${display[0].image}</section>
        <section>${display[1].image}</section>
        <section>${display[2].image}</section>

    `;
}


// class that calls the template and renders it aka inits it
class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default Header;

