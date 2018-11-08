import html from './html.js'; 
import Product from './product.js';

function makeTemplate(product) {
    return html`
    <li class="product-card">
    <img id="product" src="./assets/${product.image}">
    </li>
    `;

}
export default class ProductCard {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
    }

    render() {
        let dom = makeTemplate();
        const ul = dom.querySelector('ul');

        this.products.forEach(product => {
            let productComp = new Product(product, this.onSelect);
            ul.appendChild(productComp.render());
        });
        
        return dom;
    }
}




  
        
           

    
