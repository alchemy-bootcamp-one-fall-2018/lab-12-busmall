import html from './html.js';

function makeTemplate(product) {
    return html`
        <li class="product-card">
            <h4 class="product-name">${product.name}</h4>
            <img src="assets/products/${product.image}">
        </li>
    `;
}


class ProductCard {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate(this.product);
        const card = dom.querySelector('li');
        
        card.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        
        return dom;
    }
}

export default ProductCard;
