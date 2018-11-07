import html from '../html.js';

function makeTemplate() {
    return html`
    <h3>Product Selector<h3>
    `;
}

class ProductSelector {
    constructor(products) {
        this.products = products;
    }
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default ProductSelector;