import productApi from './product-api.js';
import DisplayImage from './image-display.js';
// import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';

let count = 0;
let results = [];

function makeTemplate() {
    const display = new DisplayImage(productApi.getAll());

    display.render();
}

class Chosen {
    constructor() {
        this.surveyItems = document.querySelectorAll('.product');  
        this.products = productApi.getAll();
    }
    
    render() {
        console.log('chosen count', count);
        if(count < 4){
            this.surveyItems.forEach(item => {
                item.addEventListener('click', event => {
                    if(count < 4) {
                        this.index = this.products.findIndex(product => {
                            return product.name === event.target.name;
                        });
        
                        this.selectedProduct = this.products[this.index];
        
                        if(this.selectedProduct.clicks > 0) {
                            this.selectedProduct.clicks = this.selectedProduct.clicks + 1;
                        } else {
                            this.selectedProduct.clicks = 1;
                        }
        
                        makeTemplate();
                        console.log('selectedProduct', this.selectedProduct);
                        results.push(this.selectedProduct);
                        console.log('results', results);
                    } else {
                        console.log('done with chosen');
                        console.log('results in else', results);
                        let summary = new UserSummary(results);
                        // console.log('summary', summary);
                        summary.render();
                    }
                });
            });
            count++;
        } 
    }
}

export default Chosen;