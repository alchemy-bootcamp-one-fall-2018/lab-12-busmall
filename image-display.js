import html from './html.js';
'use strict';


function makeTemplate() {
    return html`
    <section class="image-display">
        <div>
        <img id="product1">
        </div>

        <div>
        <img id="product2">
        </div>

        <div>
        <img id="product3">
    </section>
    `;
}

class ImageDisplay {

    constructor(products) {
        this.products = products;
        this.randomImages = [];
    }

    render() {
        const dom = makeTemplate();

        const image1 = dom.getElementById('product1');

        const image2 = dom.getElementById('product2');

        const image3 = dom.getElementById('product3');

        this.getImage();

        image1.src = `${this.randomImages[0]}`;
        image2.src = `${this.randomImages[1]}`;
        image3.src = `${this.randomImages[2]}`;

        return dom;
    }

    getImage() {

        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 19);
            this.randomImages.push(this.products[index].image);
        }
    }
}

export default ImageDisplay;
