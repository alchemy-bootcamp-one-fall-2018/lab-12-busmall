
// import productApi from './product-api.js';
import html from './html.js';


function makeTemplate() {
    return html`
    <li>
        <img class="product">
    </li>
    `;
}

class ImageDisplay {
    constructor(product, onSelect){
        this.product = product;
        this.onSelect = onSelect;

    }
    render() { 
        const dom = makeTemplate();
        const listItem = dom.querySelector('img');
        listItem.addEventListener('click', () => {
            this.onSelect(this.product);
        });

    //display the image property of product
        listItem.src = this.product.image;

        return dom;
  
    }
} 

export default ImageDisplay;