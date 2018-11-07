import html from './html.js';

function makeTemplate() {
    return html`
        <li class="products">Product Selector</li>
    `;
}
class ProductSelector {
    constructor(products){
        this.products = products;
    }
    render() {
        const dom = makeTemplate();
        const li = dom.querySelector('li');
        li.textContent = this.products[0].name;
        console.log(this.products);
        return dom;
    }
}

export default ProductSelector;