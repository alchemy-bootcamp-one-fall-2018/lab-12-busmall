import html from './html.js';

function makeTemplate(product) {
    // console.log('test', product.name);
    return html`
        <li class="product-item">
            <h1>product-display</h1>
            <img src="assets/${product.image}">
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