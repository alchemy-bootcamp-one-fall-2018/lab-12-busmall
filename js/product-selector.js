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


//make product card clsss ProductCArd, constructor (product) tis.this=product on it's own page, sent product-selector

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

let index = getRandomInt(workingArray.length);
let selectedImage = workingArray[index];

//console.log('image', selectedImage);



//being run by app (the parent component)
class ProductSelector {
        
    render() {
        const dom = makeTemplate();   // dom now is the html above - that whole bit
        console.log(dom.querySelector('#product-card-container'));     // targeting the place we'll put the stuff
        
        const productCardContainer = dom.querySelector('#product-card-container'); //now have a variable that is the line above (where stuff goes)
        const productCardComponent = new ProductCard(selectedImage);
        const image = productCardComponent.render(); //aka new ProductCard (sent to productCard)
        
        productCardContainer.appendChild(image);  //(child from product-ProductCard.js)

        return dom;
    }

}
   

export default ProductSelector;
