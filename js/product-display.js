import html from './html.js';

function makeTemplate(product) {
    return html`
        <li class="product-item">
            <h1>${product.name}</h1>
            <button onclick="select"><img src="assets/${product.image}"></button>S
        </li>

  `;      
}

class ProductDisplay {
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate(this.product);
        const listItem = dom.querySelector('li');
        const product = this.product;

        if(this.onSelect) {
            listItem.addEventListener('click', () => {
                this.onSelect(product);
            });
        }

        return dom;
    }
}

export default ProductDisplay;