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

    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }

    render() {

        const dom = makeTemplate();
        const listItem = dom.querySelector('img');
        

        listItem.src = this.product.image;
          
        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
        });
        return dom;
    }
}

export default Product;