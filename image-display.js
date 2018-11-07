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
        </div>
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
        console.log('hi', this.products);



        const image1 = dom.getElementById('product1');

        const image2 = dom.getElementById('product2');

        const image3 = dom.getElementById('product3');

        this.getImage();

        image1.src = `${this.randomImages[0]}`;
        image2.src = `${this.randomImages[1]}`;
        image3.src = `${this.randomImages[2]}`;

        image1.addEventListener('click', () => {
            image1.views++;
            image1.clicks++;
        });

        image2.addEventListener('click', () => {
            image2.views++;
            image2.clicks++;
        });

        image3.addEventListener('click', () => {
            image3.views++;
            image3.clicks++;
        });
    
        return dom;
    }

    getImage() {

        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 19);
            this.randomImages.push(this.products[index].image);
            console.log('hello', this.products[index]);
        }
    }
}

export default ImageDisplay;
