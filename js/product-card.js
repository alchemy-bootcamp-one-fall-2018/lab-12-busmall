import html from './html.js';

function makeTemplate(product) {
    return html`
        <li class="product-card">
            <h4 class="product-name">${product.name}</h4>
            <img class="product-image" src="../assets/${product.image}">
        </li>
    `;
}

export default class ProductCard {
    constructor(product) {
        this.product = product;
    }

    render() {
        const dom = makeTemplate(this.product);
    
        return dom;
    }
}

