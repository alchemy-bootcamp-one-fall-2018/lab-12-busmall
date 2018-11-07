import productApi from './product-api.js';
import DisplayImage from './image-display.js';
import surveyApi from './survey-api.js';

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
        console.log('chosen render called');
        this.surveyItems.forEach(item => {
            item.addEventListener('click', event => {
                this.index = this.products.findIndex(product => {
                    return product.name === event.target.name;
                });

                this.selectedProduct = this.products[this.index];

                if(this.selectedProduct.clicks > 0) {
                    this.selectedProduct.clicks = this.selectedProduct.clicks + 1;
                } else {
                    this.selectedProduct.clicks = 1;
                }

                console.log(this.products);
                makeTemplate();
            });
        });
    }
}

export default Chosen;