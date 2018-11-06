import html from './html.js';
import ProductCard from './product-card.js';

function makeTemplate() {
    return html`
        <section>
            <h3 class="round-number"></h3>
            <p>Click on the product you prefer...</p>
            <ul class="product-cards"></ul>
        </section>
    `;
}

// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length); 
}

class ProductSelector {
    constructor(products, onComplete) {
        this.products = products;
        this.onComplete = onComplete;
        this.survey = products.map(product => {
            return {
                name: product.name,
                image: product.image,
                views: 0,
                clicks: 0
            };
        });

        this.imagesPer = 3;
        this.roundsPerSurvey = 25;
        this.totalRounds = 0;
        this.lastProducts = null;
    }

    getRandomProducts() {
        const copy = this.survey.slice();
        
        if(this.lastProducts) {
            this.lastProducts.forEach(product => {
                const index = copy.indexOf(product);
                copy.splice(index, 1);
            });
        }

        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++) {
            const index = getRandomIndex(copy.length);
            const product = copy[index];
            copy.splice(index, 1);
            randomProducts.push(product);
        }

        this.lastProducts = randomProducts;

        return randomProducts;
    }

    showRandomProducts() {
        const randomProducts = this.getRandomProducts();

        this.roundNumber.textContent = `Rounds Remaining: ${this.roundsPerSurvey - this.totalRounds}`;

        randomProducts.forEach(product => {
            product.views++;

            const productCard = new ProductCard(product, selected => {
                selected.clicks++;
                this.totalRounds++;
                if(this.totalRounds < this.roundsPerSurvey) {
                    this.clearProducts();
                    this.showRandomProducts();
                }
                else {
                    this.onComplete(this.survey);
                }
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
        this.roundNumber = dom.querySelector('.round-number');
        this.showRandomProducts();
        return dom;
    }

}

export default ProductSelector;