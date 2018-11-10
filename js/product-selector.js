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



class ProductSelector {
    constructor() {
        this.lastThree = [];
    }
    
    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(19));
    }
    threeImages(){
        this.clearProducts();
        const currentSet = [];
        for(let i = 0; i < 3; i++) {
            let index = this.getRandomInt(workingArray.length);
            let selectedImage = workingArray[index];
            
            if(currentSet.includes(selectedImage) || this.lastThree.includes(selectedImage)) { 
                i--;
            } else {
                currentSet.push(selectedImage); //holds the set of three, for checking for duplicates
            }
        }  
        this.lastThree = currentSet;    
        currentSet.forEach(product => {
            const productCardComponent = new ProductCard(product, () => {
                this.threeImages();
            }); //this is this.image in product-card
            const image = productCardComponent.render(); //aka new ProductCard (sent to productCard)
            
            this.productCardContainer.appendChild(image);  //(child from product-ProductCard.js)

        });
        
    }
    clearProducts() {
        while(this.productCardContainer.lastElementChild) {
            this.productCardContainer.lastElementChild.remove();
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