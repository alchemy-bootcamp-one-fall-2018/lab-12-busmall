//the wrapper around the three images I get in product-card

import html from './html.js';
import products from './product-api.js';
import ProductCard from './product-card.js';

function makeTemplate() {
    return html`
    <section id="product-card-container"></section>
    `;
}

let workingArray = products.getAll();
// let completeSet = [];

class ProductSelector {
    constructor() {
        this.lastThree = [];
    }
    
    
    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(19));
    }
    
    getThreeImages(){
        const currentSet = [];
        
        for(let i = 0; i < 3; i++) {
            let index = this.getRandomInt(workingArray.length);
            let selectedImage = workingArray[index];
            
            if(currentSet.includes(selectedImage) || this.lastThree.includes(selectedImage)) { 
                i--;
            } else {
                currentSet.push(selectedImage); //holds the set of three, for checking for duplicates
                selectedImage.views++;
            }
        }  
        this.lastThree = currentSet; 

        console.log('current set', currentSet);
        return currentSet;   
    }
  
    showThreeProducts() {
        let currentSet = this.getThreeImages();
        this.clearProducts();
        currentSet.forEach(product => {
            const productCardComponent = new ProductCard(product, selected => {
                this.showThreeProducts();
                selected.votes++;
                console.log('selected', selected);
                
            });                  //this is this.image in product-card
            const image = productCardComponent.render(); //aka new ProductCard (sent to productCard)
            
            this.productCardContainer.appendChild(image);  //(child from product-ProductCard.js)
            
        }); 
    }
    

    getCompleteSet() {
        
    }
    // getCompleteSet() {
    //     let completeSet;
    //     for(let i = 0 )
    //         console.log('current set', currentSet);

    //     }
        
    // }

    // getCompleteSet() {
    //     completeSet.push(this.productCardContainer);
    //     console.log('current set', completeSet);
    // }

    clearProducts() {
        while(this.productCardContainer.lastElementChild) {
            this.productCardContainer.lastElementChild.remove();
        }
    }

    render() {
        const dom = makeTemplate();   // dom now is the html above - that whole bit
        console.log(dom.querySelector('#product-card-container'));     // targeting the place we'll put the stuff
        
        this.productCardContainer = dom.querySelector('#product-card-container'); //now have a variable that is the line above (where stuff goes)
        this.showThreeProducts();       
        
        return dom;
    }
}

// getCompleteSet() {
//     const completeSet = [];
//     for(let i = 0; i < 25; i++) {
//         

//          completeSet.push(currentSet);
//         this.currentSet = completeSet;
//         return completeSet;
//         console.log('completeSet', completeSet);
//     }
// }
export default ProductSelector;