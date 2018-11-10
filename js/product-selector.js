import html from './html.js';
import ProductCard from './product-card.js';
import productApi from './product-api.js';


function makeTemplate() {
    return html`
    <ul class="products"></ul>
    `;
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

export default class ProductSelector {
    constructor(products){
        // let surveyResults = this.survey;
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
        this.count = 0;
        this.lastProducts = [];
        // this.survey.push(surveyResults);
    }

    getRandomProducts() {
        const copy = this.survey.slice();
        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++){
            const index = getRandomIndex(copy.length);
            const product = copy[index];
            copy.splice(index, 1);

            if(this.lastProducts.includes(product)) {
                i--;
                continue;
            }
            else {
                randomProducts.push(product);
                // product.views++;
            }
            this.survey[index].views++;
        }
        this.lastProducts = randomProducts;
        return randomProducts;
    }

    showRandomProducts() {

        const randomProducts = this.getRandomProducts();
        
        randomProducts.forEach(product => {
            const productCard = new ProductCard(product, selected => {
                // selected.clicks++;
                const index = this.survey.indexOf(selected);
                this.survey[index].clicks++;
                
                console.log('survey', this.survey);

                this.count++;
                if(this.count === 25) {
                    window.location = './user-summary.html';
                    productApi.saveSurvey(this.survey);
                }
                
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
