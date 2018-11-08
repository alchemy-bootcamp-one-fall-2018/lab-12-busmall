import html from '../html.js';
import Product from './Product.js';

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
        this.showImages();
        return dom;
    }

    update() {
        let randomThree = [];
        for(let i = 0; i < 3; i++) {
            const randomIndex = this.randomInt();
            const products = this.products;
            if(randomThree.includes(products[randomIndex]) === true) {
                console.log('duplicate found');
                i--;
            }
            else {
                randomThree.push(products[randomIndex]);
                console.log('random three is', randomThree); 
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
        });
    }

    randomInt() {
        const index = Math.floor(Math.random() * Math.floor(19));
        return index;
    }
}

export default ProductDisplay;