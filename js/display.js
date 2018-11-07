import html from './html.js';
import productsApi from './products-api.js';

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



// once you have the display of 3 images, you can save that as the usedArray

function makeTemplate() {
    return html`
    <h1>Pick a product:</h1>
    <section> <img src="${display[0].image}" class="Image"> </section>
    <section> <img src="${display[1].image}" class="Image"> </section>
    <section> <img src="${display[2].image}" class="Image"> </section>
    `;
}

class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default Header;