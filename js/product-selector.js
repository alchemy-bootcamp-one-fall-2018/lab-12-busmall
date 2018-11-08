import html from './html.js';
import Product from './product-card.js';

function makeTemplate() {
    return html`
        <ul class="products"></ul>
    `;
}

// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}


class ProductSelector {
    constructor(products){
        this.products = products;
        this.survey = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks: 0
            };
        });
        this.imagesPer = 3;
        this.round = -1;
    }

    getRandomProducts() {
        const copy = this.survey.slice();
        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++){
            const index = getRandomIndex(copy.length);
            const product = copy[index];
            copy.splice(index, 1);
            randomProducts.push(product);
            product.views++;
            
            if(this.round === 24){
                window.location = 'user-summary.html';
            }
        }
        this.round++;
        console.log(this.round);
        
        return randomProducts;
    }

    showRandomProducts() {
        const randomProducts = this.getRandomProducts();
        randomProducts.forEach(product => {
            const productCard = new Product(product, selected => {
                selected.clicks++;
                this.clearProducts();
                this.showRandomProducts();
                console.log(selected);
                console.log(randomProducts);
            }); 
            this.list.appendChild(productCard.render());
        } 
        );
    }
    
    clearProducts() {
        while(this.list.lastElementChild) {
            this.list.lastElementChild.remove();
        }
    }
    
    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        this.showRandomProducts();
        
        //move the last products, splice?, so they are always random
        //keep clicks and views in localStorage? - go look at lab; 25 rounds

        return dom;
    }
}

export default ProductSelector;