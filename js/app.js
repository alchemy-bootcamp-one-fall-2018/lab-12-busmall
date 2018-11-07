import productApi from './product-api.js';
import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';

//add a store method to survey api that stores new product list.
//after 25 clicks, redirect to user-summary.html
//create user-summary.html

surveyApi.init();

const display = new DisplayImage(productApi.getAll());
display.render();

const chosen = new Chosen;
// chosen.render();

const summary = new UserSummary(productApi.getAll());
// summary.render();