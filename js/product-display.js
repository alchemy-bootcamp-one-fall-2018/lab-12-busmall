import html from './html.js';

let template = function(product) {
    return html`
        <div class="product-shown">
            <h2 class="product-name">${product.name}</h2>
            <img src="../assets/${product.image}">        
        </div>
    `;
};

class ProductDisplay {
    
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect;
    }
    render() {
        const dom = template(this.product);
        const divItem = dom.querySelector('div');
        const product = this.product;


        divItem.addEventListener('click', () => {
            product.clicks++;
            console.log('hear click', product);
        });
              
        return dom;
    }
}

export default ProductDisplay;