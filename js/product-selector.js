import productsApi from './product-api.js';
import html from './html.js';
import Image from './images.js';


let products = productsApi.getAll();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getProducts() {
    let display = [];
    while(display.length < 3) {
        let index = getRandomInt(products.length); 
        if(display.includes(products[index]) === false) {
            products[index].views += 1;
            display.push(products[index]);
        } 
    }
    return display;
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
        this.imageContainer = dom.querySelector('.image-container');

        this.renderImages();
        return dom;
    }
    renderImages() {
        let display = getProducts();
        for(var i = 0; i < display.length; i++) {
            const image = new Image(display[i], selected => {
                selected.clicks += 1;
                while(this.imageContainer.firstChild) {
                    this.imageContainer.removeChild(this.imageContainer.firstChild);
                }
                this.renderImages();

            });
            this.imageContainer.appendChild(image.render());
        }
    }
}


export default Header;


