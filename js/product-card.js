import html from './html.js';

function makeTemplate(product) {
    return html`
        <li class="product-card">
        <h4 class="product-name">${product.name}></h4>
        <img src="asses/products/${product.image}"
        </li>
    `;
}

class ProductCard {
    constructor(product) {
        this.product = product;
    }

    render() {
        const dom = makeTemplate(this.product);
        const card = dom.querySelector('.product-card');
    
        return dom;
    }
}

export default ProductCard;