import html from './html.js';
import products from './product-api.js';

console.log('product selector', products.getAll());

let workingArray = products.getAll();


//make product card clsss ProductCArd, constructor (product) tis.this=product on it's own page, sent product-selector

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

let index = getRandomInt(workingArray.length);
let selectedImage = workingArray[index];

console.log('image', selectedImage);




function makeTemplate() {
    return html`
    <p>hello</p>
    <section> <img src="./assets/bag.jpg"></section>
    <section> <img src="./assets/bag.jpg"></section>
    <section> <img src="./assets/bag.jpg"></section>
    `;
}

export default class Products {
    
    
    render() {
        const dom = makeTemplate();

        return dom;
    }
}




