import html from '../html.js';
import Product from './Product.js';

function makeTemplate() {
    return html`
        
        <ul class="product-list"></ul>
        <div class="sample">HELLOOOOO</div>
    `;
}

class ProductDisplay {
    constructor(products, onSelect, onView) {
        this.products = products;
        this.onSelect = onSelect;
        this.onView = onView;
    }

    render() {
        let dom = makeTemplate();
        const ul = dom.querySelector('ul');

        for(let i = 0; i < 3; i++) {
            let productComp = new Product(this.products[this.randomInt()], this.onSelect, this.onView, this.onUpdate);
            ul.appendChild(productComp.render());
        }
        
        return dom;
    }

    update() {
        let dom = makeTemplate();
        const ul = dom.querySelector('ul');

        ul.removeChild(ul.childNodes[0]);
       
        return dom;
    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(19));
        return index;
    }

}

export default ProductDisplay;