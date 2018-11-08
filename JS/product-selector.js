import productsApi from './products-api.js';
import html from './html.js';
import Image from './image.js';


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

let totalCount = 0;

class Header {
    render() {
        const dom = makeTemplate();
        this.imageContainer = dom.querySelector('.image-container');
        

        this.renderImages();
        return dom;
    }
    renderImages() {
        let display = getProducts();
        //console.log(display, 'display');
        for(var i = 0; i < display.length; i++) {
            const image = new Image(display[i], selected => {
                selected.clicks += 1;
                //console.log(selected, selected.clicks);
                while(this.imageContainer.firstChild) {
                    this.imageContainer.removeChild(this.imageContainer.firstChild);
                }
                //console.log(selected, 'this image');
                this.renderImages();
                totalCount += 1;
                console.log('totalCount', totalCount);
            });
            this.imageContainer.appendChild(image.render());
        }
    }
}


export default Header;