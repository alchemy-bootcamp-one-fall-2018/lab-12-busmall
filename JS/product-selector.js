import productsApi from './products-api.js';
import html from './html.js';


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

function makeTemplate() {
    return html`
    <h1>Pick a product:</h2>
    <section> <img src="${display[0].image}" class="align-image"> </section>
    <section> <img src="${display[1].image}" class="align-image"> </section>
    <section> <img src="${display[2].image}" class="align-image"> </section>
    `;
}

class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}
export default Header;