import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';
import DataChart from './data-chart.js';

//make chart drawing into a function
//change limit to 25

surveyApi.init();

if(window.location.pathname === '/index.html') {
    DisplayImage.init();
    DisplayImage.render();
    Chosen.init();
}


const summary = new UserSummary();
summary.render(false);

const dataChart = new DataChart;
dataChart.render();