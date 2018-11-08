import html from './html.js';

function makeTemplate(product) {
    return html`
    <li class="product-card">
        <img id="product" src="./assets/${product.image}">
    </li>
    `;
}

class Product {
    constructor(product, onSelect){
        this.product = product;
        this.onSelect = onSelect;
        console.log(this.onSelect);
    }
    render() {
        const dom = makeTemplate(this.product);
        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
            console.log('I am clicked!');
        });

        return dom;

    }
}

export default Product;