import html from './html.js';
import products from './product-api.js';

console.log('product selector', products.getAll());

let workingArray = products.getAll();


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}
let index = getRandomInt(workingArray.length);
let selectedImage = workingArray[index];

console.log('image', selectedImage);



//console.log(getRandomInt(index));

function makeTemplate() {
    return html`
    <p>hello</p>
    <section> <img src="./assets/bag.jpg"></section>
    <section> <img src="./assets/bag.jpg"></section>
    <section> <img src="./assets/bag.jpg"></section>
    `;
}

export default class App {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}




