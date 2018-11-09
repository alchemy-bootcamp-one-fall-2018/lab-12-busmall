
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
        // this.getImage();
        const dom = makeTemplate(this.product);
        const listItem = dom.querySelector('.list-item');
        listItem.addEventListener('click', () => {
            // eslint-disable-next-line no-console
            console.log('product name is ', this.product.name);
            
        });
  
     
        return dom;
    }

    // getImage() {
    //     for(let i = 0; i < 3; i++) {
    //         const index = Math.floor(Math.random() * 25);
            // let imi
    //     }
    // }
}
        
          
export default ImageDisplay;