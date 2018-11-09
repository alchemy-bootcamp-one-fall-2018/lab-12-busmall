import html from './html.js';
import ProductDisplay from './product-display.js';

function makeTemplate() {
    return html`
        <ul class="products"></ul>
    `;
}

class ProductSelector {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
     
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

    
        this.products.forEach(product => {
            const productDisplay = new ProductDisplay(product);
            this.list.appendChild(productDisplay.render());
        });

        return dom;
    }
}

export default ProductSelector;