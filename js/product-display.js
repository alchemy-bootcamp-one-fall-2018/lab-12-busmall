import html from './html.js';

let template = function(product) {
    return html`
        <div ref name="anyClick" class="product-shown"> 
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
        product.views++;

        divItem.addEventListener('click', () => {
            this.onSelect(product);
        });
              
        return dom;
    }
}

export default ProductDisplay;