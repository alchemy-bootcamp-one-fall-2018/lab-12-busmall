import html from './html.js';
import Product from './product.js';

function makeTemplate() {
    return html`
        <ul class="products"></ul>
    `;
}
class ProductSelector {
    constructor(products){
        this.products = products;
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

        this.products.forEach(product => {
            const productCard = new Product(product);
            this.list.appendChild(productCard.render());

        });
        
        return dom;
    }
}

export default ProductSelector;