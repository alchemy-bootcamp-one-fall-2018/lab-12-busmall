import ImageDisplay from './image-display.js';
import productApi from './product-api.js';


const products = productApi.getAll();

// console.log('hello its me', products);

let imageDisplay = new ImageDisplay(products);

let imageBox = document.getElementById('root-image-display');

imageBox.appendChild(imageDisplay.render());