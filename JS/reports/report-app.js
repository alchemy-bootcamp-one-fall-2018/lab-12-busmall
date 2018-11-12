import html from '../html.js';
import surveyApi from '../survey-api.js';
import SurveyChart from './survey-chart.js';

function makeTemplate() {
    return html`
        <main>
            <h2>Product Report Results</h2>
            <section class="survey-chart"></section>
            <section class="product-report"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }

    render() {
        const dom = makeTemplate();

        const chartSection = dom.querySelector('.survey-chart');
        const surveyChart = new SurveyChart(this.surveyData);
        chartSection.appendChild(surveyChart.render());
        
        return dom;
    }
}

const app = new ReportApp();
const root = document.getElementById('root');
root.appendChild(app.render());

