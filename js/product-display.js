import html from './html.js';
import productsApi from './products-api.js';

const products = productsApi.getAll();

function makeTemplate(product) {
    return html`
        <li class="product-item">
            <h1>Focus Group Product Review Results</h1>
            <p>${product.name}</p>
            <img src="assets/${product.image}">
        </li>
  `;      
    console.log('test', product.name);
}
class ProductDisplay {
    constructor(product) {
        this.product = product;
    }

    render() {
        const dom = makeTemplate(this.product);
        // const productItem = dom.querySelector('.product-item');

        return dom;
    }
}

export default ProductDisplay;