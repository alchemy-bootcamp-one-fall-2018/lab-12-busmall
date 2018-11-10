
// import productApi from './product-api.js';
import html from './html.js';


function makeTemplate(product) {
    return html`
    <li class="list-item">
        <img src="${product.image}">
    </li>
    `;
}

class ImageDisplay {
    constructor(product, onSelect){
        this.product = product;
        this.onSelect = onSelect;
        this.randomImages = [];

    }
    render() { 
        const dom = makeTemplate(this.product);
        const listItem = dom.querySelector('.list-item');
        listItem.addEventListener('click', () => {
            console.log('product name is ', this.product.name);
        });

        return dom;
  
    }
} 

export default ImageDisplay;