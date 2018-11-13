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
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate(this.product);
        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        return dom;
    }
}

