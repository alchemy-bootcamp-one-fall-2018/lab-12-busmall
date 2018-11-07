// import surveyApi from './survey-api.js';
import productsApi from './products-api.js';
import ImageDisplay from './image-display.js';

let products = productsApi.getAll();


let imageDisplay = new ImageDisplay(products);

let app = document.getElementById('body');
app.appendChild(imageDisplay.render());



