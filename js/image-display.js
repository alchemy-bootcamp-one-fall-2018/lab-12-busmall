import html from './html.js';
import Product from './product.js';

function makeTemplate() {
    return html`
        <ul class="product-list"></ul>
    `;
}

class ImageDisplay {
    constructor(products, onSelect, onView) {
        this.products = products;
        this.onSelect = onSelect;
        this.onView = onView;
    }

    render() {
        const dom = makeTemplate();
        this.ul = dom.querySelector('ul');
        this.update();
        return dom;
    }

    update() {
        
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }

        for(let i = 0; i < 3; i++) {
            let randomProduct = new Product(this.products[this.randomInt()], this.onSelect, this.onView);
            this.ul.appendChild(randomProduct.render());
        }
    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(19));
        return index;
    }
}

export default ImageDisplay;