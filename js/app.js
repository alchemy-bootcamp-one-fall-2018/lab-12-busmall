import productApi from './product-api.js';
import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';
import DataChart from './data-chart.js';

surveyApi.init();

const display = new DisplayImage(productApi.getAll());
display.render();

const chosen = new Chosen;
chosen.render();

const summary = new UserSummary();
summary.render(false);

const dataChart = new DataChart;
dataChart.render();