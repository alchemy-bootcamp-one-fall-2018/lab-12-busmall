import html from './html.js';

function makeTemplate() {
    return html`
        <h3>product selector</h3>
    `;
}
class ProductSelector {
    constructor(products){
        this.products = products;
    }
    render() {
        const dom = makeTemplate();
        console.log(this.products);
        return dom;
    }
}



export default ProductSelector;