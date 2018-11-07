/*eslint-disable no-console*/
import html from './html.js';
'use strict';

function makeTemplate() {
    return html`
        <li>
            <img class="product">
        </li>
    `;
}

class ImageDisplay {

    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
        this.selectedProducts = [];
    }

    render() {
        this.getImage();

        console.log('hi', this.products);
        const dom = makeTemplate();
        const listItem = dom.querySelector('img');
        
        for(var i = 0; i < 3; i++) {
            listItem.src = this.selectedProducts[i].image;
            console.log('hullo', this.selectedProducts[i].name);
            console.log(this.selectedProducts[i].views);
            
            if(this.onSelect) {
                listItem.addEventListener('click', () => {
                    this.selectedProducts[i].views++;
                    this.selectedProducts[i].clicks++;
                    console.log('hi', this.selectedProducts);
                });
            }
        }
        return dom;
    }
    
    getImage() {
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 19);
            this.selectedProducts.push(this.products[index]);
            console.log('hello', this.products[index]);
        }
    }
}

export default ImageDisplay;