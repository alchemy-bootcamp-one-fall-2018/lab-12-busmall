import html from './html.js';
import Product from './product-card.js';
import productApi from './data-apis/product-api.js';

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
        this.lastProducts = [];
    }
    
    getRandomProducts() {
        const copy = this.survey.slice();
        let randomProducts = [];
        
        for(let i = 0; i < this.imagesPer; i++){
            const index = getRandomIndex(copy.length);
            const product = copy[index];
            copy.splice(index, 1);
            
            if(this.lastProducts.includes(product)){
                i--; 
                continue; //ryan helped me with this part
            }
            else {
                randomProducts.push(product);
            }
            this.survey[index].views++;
            console.log('survey', this.survey[index]);
            
            if(this.round === 24){
                window.location = 'user-summary.html';
                productApi.saveSurvey(this.survey);
            }
        }
        this.round++;
        this.lastProducts = randomProducts;
        return randomProducts;
    }
    
    showRandomProducts() {
        const randomProducts = this.getRandomProducts();
        randomProducts.forEach(product => {
            const productCard = new Product(product, selected => {
                const index = this.survey.indexOf(selected);
                this.survey[index].clicks++;
                this.clearProducts();
                this.showRandomProducts();
            }); 
            this.list.appendChild(productCard.render());
        });

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

export default ProductSelector;