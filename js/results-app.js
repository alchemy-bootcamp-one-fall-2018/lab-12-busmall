import surveyApi from './survey-api.js';
import ResultList from './results.js';
import ReportChart from './chart.js';
import html from './html.js';

function makeTemplate() {
    return html`
        <div id="this-is-the-chart"></div>
    `;
}

export default class ReportApp {
    constructor() {
        this.results = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const chartLocation = dom.querySelector('#this-is-the-chart');
        const damnChart = new ReportChart(this.results);
        chartLocation.appendChild(damnChart.render());
        return dom;
    }
}

let results = surveyApi.getAll();

const ul = document.getElementById('final-text');
for(let i = 0; i < results.length; i++){
    const resultList = new ResultList();
    ul.appendChild(resultList.render(results[i]));
}