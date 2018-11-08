import DisplayImage from './image-display.js';
import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import UserSummary from './user-summary.js';
import DataChart from './data-chart.js';

//correct extra display at end
//correct duplicate images
//merge with master

surveyApi.init();

DisplayImage.constructor();
DisplayImage.render();

Chosen.constructor();

const summary = new UserSummary();
summary.render(false);

const dataChart = new DataChart;
dataChart.render();