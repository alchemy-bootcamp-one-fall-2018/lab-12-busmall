/*eslint-disable no-console*/
import html from '../html.js';
'use strict';

function makeTemplate() {
    return html`
        <li>
            <img class="product">
        </li>
    `;
}

class Product {

    constructor(product, onSelect, onView) {
        this.product = product;
        this.onSelect = onSelect;
        this.onView = onView;
    }
    
    render() {
        
        const dom = makeTemplate();
        this.listItem = dom.querySelector('img');
        this.listItem.src = this.product.image;
          
        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        this.onView(this.product);
        return dom;
    }
}

export default Product;