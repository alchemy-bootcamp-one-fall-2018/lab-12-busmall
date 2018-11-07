import productApi from './product-api.js';
import DisplayImage from './image-display.js';
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
        if(count < 4){
            this.surveyItems.forEach(item => {
                item.addEventListener('click', event => {
                    if(count < 4) {
                        console.log('chosen count', count);
                        this.index = this.products.findIndex(product => {
                            return product.name === event.target.name;
                        });
        
                        this.selectedProduct = this.products[this.index];
        
                        if(this.selectedProduct.clicks > 0) {
                            this.selectedProduct.clicks = this.selectedProduct.clicks + 1;
                        } else {
                            this.selectedProduct.clicks = 1;
                        }
        
                        results.push(this.selectedProduct);
                        makeTemplate();
                    } else {
                        localStorage.setItem('results', JSON.stringify(results));
                        let summary = new UserSummary();
                        summary.render();
                    }
                });
            });
            count++;
        } 
    }
}

export default Chosen;