import productApi from './product-api.js';
import DisplayImage from './image-display.js';



const disp = new DisplayImage(productApi.getAll());
disp.display();