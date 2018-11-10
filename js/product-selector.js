import html from './html.js';
import ProductDisplay from './product-display.js';
// import productViews from './products-api';
// products in
// onSurvey in

function makeTemplate() {
    return html`
        <div class="random-product">
        </div>
    `;
}

class ProductSelector {
    constructor(products, onComplete) {
        this.products = products;
        this.onComplete = onComplete;
        this.lastThree = [];
        this.viewCount = 0;
    }

    getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength); 
    }

    getTrio() {
        const randomProduct = []; 
        const products = this.products;

        for(let i = 0; i < 3; i++) {
            const nouveauIndex = this.getRandomIndex(products.length);

            const product = products[nouveauIndex];
            if(randomProduct.includes(product) || this.lastThree.includes(product)) {
                i--;
            } else {

                randomProduct.push(products[nouveauIndex]);
            }
        }

        this.lastThree = randomProduct;
        return randomProduct;
    }

    displayRandomThree() {
        const randomProduct = this.getTrio();
        if(this.viewCount < 25) {
            randomProduct.forEach(product => {
                const productDisplay = new ProductDisplay(product, selected => {
                    this.viewCount++;
                    selected.clicks++;
                    this.clearImages();
                    this.displayRandomThree();
                });
                this.productsList.appendChild(productDisplay.render());
            });
        }
        else {
            this.onComplete(this.products);
        }
    }

    clearImages() {
        while(this.productsList.lastElementChild) {
            this.productsList.lastElementChild.remove();
        }
    }

    render() {
        const dom = makeTemplate();
        this.productsList = dom.querySelector('div');
        this.displayRandomThree();
        
        return dom;
    }
}

export default ProductSelector;