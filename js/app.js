import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';
import DataChart from './data-chart.js';

//correct double display of first item...?

surveyApi.init();

DisplayImage.constructor();
DisplayImage.render();
// const display = new DisplayImage();
// display.render();

Chosen.constructor();
// chosen.render();

const summary = new UserSummary();
summary.render(false);

const dataChart = new DataChart;
dataChart.render();