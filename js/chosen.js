import productApi from './product-api.js';

function makeTemplate() {
}

class Chosen {
    constructor() {
        this.surveyItems = document.querySelectorAll('.product');
        
        this.surveyItems.forEach(item => {
            item.addEventListener('click', event => {
                this.products = productApi.getAll();
                this.index = this.products.findIndex(product => {
                    return product.name === event.target.name;
                });

                console.log(event.target.name);
                console.log(this.products[this.index]);
                
            });
        });
    }
}

export default Chosen;