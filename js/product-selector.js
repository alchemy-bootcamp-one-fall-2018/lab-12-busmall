import html from './html.js';
import Product from './product-card.js';

function makeTemplate() {
    return html`
        <ul class="products">Product Selector</ul>
    `;
}
export default class ProductSelector {
    constructor(products){
        this.products = products;
       
    }
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        
        this.products.forEach(product => {
            const productCard = new Product(product);
            this.list.appendChild(productCard.render()); 
        });
    
        return dom;
    }
}   


