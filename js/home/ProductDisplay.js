import html from '../html.js';
import Product from './Product.js';

function makeTemplate() {
    return html`
        <ul class="product-list"></ul>
    `;
}

class ProductDisplay {
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
            this.productComp = new Product(this.products[this.randomInt()], this.onSelect, this.onView);
            this.ul.appendChild(this.productComp.render());
        }
    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(19));
        return index;
    }
}

export default ProductDisplay;