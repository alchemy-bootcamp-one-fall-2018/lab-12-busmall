import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';
import DataChart from './data-chart.js';

//add clicks to session
//change summary to display session, not total
//merge with master

surveyApi.init();

if(window.location.pathname === '/index.html') {
    DisplayImage.constructor();
    DisplayImage.render();
}

Chosen.constructor();

const summary = new UserSummary();
summary.render(false);

const dataChart = new DataChart;
dataChart.render();