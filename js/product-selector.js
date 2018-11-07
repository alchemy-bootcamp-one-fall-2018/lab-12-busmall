import html from './html.js';

function makeTemplate() {
    return html`
        <li class="products">Product Selector</li>
    `;
}
class ProductSelector {
    constructor(products){
        this.products = products;
        // this.image = image;
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        // console.log(this.
        //     (products);
        for(let i = 0; i < this.products.length; i++)
            return dom;
        
    }
}



export default ProductSelector;