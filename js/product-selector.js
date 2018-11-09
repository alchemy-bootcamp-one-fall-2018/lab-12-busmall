//the wrapper around the three images I get in product-card

import html from './html.js';
import products from './product-api.js';
import ProductCard from './product-card.js';

function makeTemplate() {
    return html`
    <p>hello</p>
    <section id="product-card-container"></section>
    `;
}

let workingArray = products.getAll();

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(19));
}


class ProductSelector {
    threeImages(){
        for(let i = 0; i < 3; i++) {
            let index = getRandomInt(workingArray.length);
            let selectedImage = workingArray[index];
            
            const productCardComponent = new ProductCard(selectedImage, () => {
                this.threeImages();
            }); //this is this.image in product-card
            const image = productCardComponent.render(); //aka new ProductCard (sent to productCard)
            
            this.productCardContainer.appendChild(image);  //(child from product-ProductCard.js)
        }  

    }
    
    render() {
        const dom = makeTemplate();   // dom now is the html above - that whole bit
        console.log(dom.querySelector('#product-card-container'));     // targeting the place we'll put the stuff
        
        this.productCardContainer = dom.querySelector('#product-card-container'); //now have a variable that is the line above (where stuff goes)
        this.threeImages();       

        return dom;
    }

}

export default ProductSelector;