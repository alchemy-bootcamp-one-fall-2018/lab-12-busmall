import html from '../html.js';
import Product from './Product.js';

function makeTemplate() {
    return html`
        <ul class="product-list"></ul>
    `;
}

class ProductDisplay {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
    }

    render() {
        let dom = makeTemplate();
        const ul = dom.querySelector('ul');

        for(let i = 0; i < 3; i++) {
            let productComp = new Product(this.products[this.randomInt()], this.onSelect);
            ul.appendChild(productComp.render());
        }

        return dom;

    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(19));
        return index;
    }

}

export default ProductDisplay;