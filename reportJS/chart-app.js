import surveyApi from '../js/survey-api.js';
import html from '../js/html.js';
import SurveyChart from './chart-view.js';

function makeTemplate() {
    return html`
    <h1> Report Page </h1>
    <div class="chart-viewer"> </div>
    `;
}
export default class ReportApp {

    constructor() {
        this.surveyData = surveyApi.getAll();
    }

    render() {
        let dom = makeTemplate();
        console.log('survey data', this.surveyData);

        const chartSection = dom.querySelector('.chart-viewer');
        const chart = new SurveyChart(this.surveyData);
        chartSection.appendChild(chart.render());
        return dom;
    }

}