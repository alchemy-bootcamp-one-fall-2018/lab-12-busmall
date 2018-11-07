import html from './html.js';

function makeTemplate() {
    return html`
    <section>
    <img id="product-1" class="random-image">
    <img id="product-2" class="random-image">
    <img id="product-3" class="random-image">
    </section>
    `;
}
class ImageDisplay {
    constructor(products, onSelect) {
        this.products = products;
        this.images = [];
        this.onSelect = onSelect;
        this.clicks = 0;
    }
    render() {
        const dom = makeTemplate();

        const image1 = dom.getElementById('product-1');
        const image2 = dom.getElementById('product-2');
        const image3 = dom.getElementById('product-3');

        console.log(image1.onSelect);
        this.getImage();
        
        image1.src = `${this.images[0].image}`;
        image2.src = `${this.images[1].image}`;
        image3.src = `${this.images[2].image}`;
        
        return dom;
    }

    getImage() {
        for(let i = 0; i < 3; i++) {
            let lastNumber = 0;
            let index = Math.floor(Math.random() * 19) + 1;
            if(index !== lastNumber) {
                this.images.push(this.products[index]);
            } else {
                index = Math.floor(Math.random() * 19) + 1;
            }
            lastNumber = index;
        }
    }

    onSelect() {

    }
}

export default ImageDisplay;