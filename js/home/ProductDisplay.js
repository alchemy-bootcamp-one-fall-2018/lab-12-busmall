import html from '../html.js';
import Product from './Product.js';

let pastThree = ['duck', 'cat', 'dino'];

function makeTemplate() {
    return html`
        <ul class="product-list"></ul>
    `;
}

class ProductDisplay {
    constructor(products, onSelect, onView) {
        this.products = products;
        this.onSelect = onSelect;
        this.onView = onView;
    }

    render() {
        const dom = makeTemplate();
        this.ul = dom.querySelector('ul');
        this.productComp = this.pastThree;
        this.showImages();
        return dom;
    }
    
    update() {
        let randomThree = [];
        // pastThree.push(randomThree);
        for(let k = 0; k < 3; k++) {
            const randomIndex = this.randomInt();
            const products = this.products;
            
            if(randomThree.includes(products[randomIndex]) === true) {
                k--;
            }
            else {
                if(pastThree.includes(products[randomIndex]) === false) {
                    randomThree.push(products[randomIndex]);
                }
                else {
                    console.log('duplicate found');
                    k--; 
                }
            }
        }
        return randomThree;
        
    }
    
    showImages() {
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }
        let threeProducts = this.update();
        threeProducts.forEach(product => {
            let productComp = new Product(product, this.onSelect, this.onView);
            this.ul.appendChild(productComp.render());
            pastThree = threeProducts;
        });
    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(19));
        return index;
    }
}

export default ProductDisplay;