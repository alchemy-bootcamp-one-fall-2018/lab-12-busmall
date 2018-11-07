import html from './html.js';
import Product from './product-card.js';

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

        for(let i = 0; i < this.products.length; i++) {
            this.add(this.products[i]);
        }
        console.log(this.products);
        return dom;
    }
    add(product){
        const productCard = new Product(product);
        this.list.appendChild(productCard.render());
    }
}

export default ProductSelector;