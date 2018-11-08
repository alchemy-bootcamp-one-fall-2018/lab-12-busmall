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
            console.log('product name is ', this.product.name);
            // product1.views++;
        });

        
        // for(var i = 0; i < 3; i++) {
        //     listItem.src = this.randomImages[i].image;
        //     this.randomImages[i].views++;
        // }
       
        return dom;
    }

    getImage() {
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 24);
            this.randomImages.push(this.products[index]);
        }
    }
}
        
          
export default ImageDisplay;