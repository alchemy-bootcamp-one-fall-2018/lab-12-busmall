import html from './html.js';
import ProductCard from './product-card.js';
import surveyApi from './survey-api.js';

function makeTemplate() {
    return html`
        <ul class="products"></ul>
    `;    
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length); 
}

class ProductDisplay {
    constructor(products) {
        this.products = products;
        // this.survey = products.map(product => {
        //     return {
        //         name: product.name,
        //         image: product.image,
        //         views: 0,
        //         clicks: 0
        //     };
        // });
        this.imagesPer = 3;
        this.roundsPerSurvey = 25;
        this.totalRounds = 0;
        this.lastProducts = null;
    
    }

    getRandomProducts() {
        const copy = this.products.slice();

        if(this.lastProducts) {
            this.lastProducts.forEach(product => {
                const index = copy.indexOf(product);
                copy.splice(index, 1);
            });
        }

        const randomProducts = [];

        for(let i = 0; i < this.imagesPer; i++) {
            const index = getRandomIndex(copy.length);
            // console.log(index);
            const product = copy[index];
            copy.splice(index, 1);
            
            // console.log(this.survey[index].name, this.survey[index].views);
            randomProducts.push(product);
            
        } 
        this.lastProducts = randomProducts;
        console.log('random products selected', randomProducts);
        return randomProducts;
    }

    showRandomProducts() {
        const randomProducts = this.getRandomProducts();

        
        randomProducts.forEach(product => {
            product.views++;

            const productCard = new ProductCard(product, selected => {
                selected.clicks++;
                this.totalRounds++;
                
                console.log('survey', this.survey);

                if(this.totalRounds < this.roundsPerSurvey) {
                    this.clearProduct();
                    this.showRandomProducts();
                }
                else {
                    console.log('survey count', this.totalRounds);
                    alert('Thank you for completing the survey! Click OK to see the results.');
                    surveyApi.saveProducts(this.products);
                    // window .redirect to report html
                    window.location = './user-summary.html';

                    
                }
                
            });
            this.list.appendChild(productCard.render());
        }
        );
    }

    clearProduct() {
        while(this.list.lastElementChild) {
            this.list.lastElementChild.remove();
        }
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('.products');
        this.showRandomProducts();
        return dom;
    }

}


export default ProductDisplay;