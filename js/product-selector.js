import html from './html.js';

import ProductCard from './product-card.js';


function makeTemplate() {
    return html`
    <ul class="products">Product Selector</ul>
    `;
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

export default class ProductSelector {
    constructor(products){
        this.products = products;
        this.survey = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks: 0,
            };
        });
    
        this.imagesPer = 3;
       
    }
    
    getRandomProducts() {
        const copy = this.survey.slice();
        

        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++){
            const index = getRandomIndex(copy.length);
            const product = copy[index];
            copy.splice(index, 1);
            randomProducts.push(product);
        }
        console.log('there are our products', randomProducts);
        return randomProducts;
    }

    showRandomProducts() {

        const randomProducts = this.getRandomProducts();
        
        randomProducts.forEach(product => {
            const productCard = new ProductCard(product);
            this.list.appendChild(productCard.render());
        }
        ); 
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');
        
        this.showRandomProducts();
        
        return dom;
        
    }
}  