import productApi from './product-api.js';
import DisplayImage from './image-display.js';
import Chosen from './chosen.js';



const display = new DisplayImage(productApi.getAll());
display.render();

const chosen = new Chosen;