import html from './html.js';

function makeTemplate(product) {
    return html`
    <li class="product-card">
        <img id="product" src="./assets/${product.image}">
    </li>
    `;
}

class Product {
    constructor(product){
        this.product = product;
    }
    render() {
        const dom = makeTemplate(this.product);

        return dom;

    }
}

export default Product;