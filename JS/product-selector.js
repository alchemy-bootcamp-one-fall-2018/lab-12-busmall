import productsApi from './products-api.js';
import html from './html.js';
import Image from './image.js';


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
    <section class="image-container"></section>
    `;
}

class Header {
    render() {
        const dom = makeTemplate();
        const imageContainer = dom.querySelector('.image-container');

        const image = new Image(display[0], function(selected) {
            console.log('image clicked', selected);
        });
        imageContainer.appendChild(image.render());
        return dom;
    }
}


export default Header;