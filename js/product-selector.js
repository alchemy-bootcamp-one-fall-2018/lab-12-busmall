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
        this.rounds = 25;
    }
    
    getRandomProducts() {
        const copy = this.survey.slice();
        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++){
            const index = getRandomIndex(copy.length);
            const product = copy[index];
            copy.splice(index, 1);
            product.views++;
            randomProducts.push(product);
        }
        console.log('there are our products', randomProducts);
        return randomProducts;
    }

    showRandomProducts() {

        const randomProducts = this.getRandomProducts();
        
        randomProducts.forEach(product => {
            const productCard = new ProductCard(product, selected => {
                console.log('clicked', selected);
                selected.clicks++;
                console.log('clicked plus', selected.clicks);
                
                this.clearProducts();
                this.showRandomProducts();
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

        return dom;
        
    }
}  
// add event listener for clicks
// new pics each round
// 25 rounds
// make sure info is stored for analyzing
// at end of 25 rounds, send to reports page
