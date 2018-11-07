import productApi from './product-api.js';
import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';

//add a store method to survey api that stores new product list.
//store the temp array and add a condition that index is not included in both current temp and the previous temp array.
//after 25 clicks, redirect to user-summary.html
//create user-summary.html

surveyApi.init();

const display = new DisplayImage(productApi.getAll());
display.render();

const chosen = new Chosen;
chosen.render();
