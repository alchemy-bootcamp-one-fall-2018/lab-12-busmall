import html from './html.js';
import Product from './product.js';

function makeTemplate() {
    return html`
        <ul class="products">
    </ul>
    `;
}

export default class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
    }

    render() {
        let dom = makeTemplate();
        const ul = dom.querySelector('ul');

        this.products.forEach(product => {
            let productComp = new Product(product, this.onSelect);
            ul.appendChild(productComp.render());
        });
        
        return dom;
    }
}