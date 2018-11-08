import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';
import DataChart from './data-chart.js';

console.log(window.location.pathname);

surveyApi.init();

if(window.location.pathname === '/index.html' || window.location.pathname === '/lab-12-busmall/') {
    DisplayImage.init();
    DisplayImage.render();
    Chosen.init();
}


const summary = new UserSummary();
summary.render(false);

const dataChart = new DataChart;
dataChart.render();