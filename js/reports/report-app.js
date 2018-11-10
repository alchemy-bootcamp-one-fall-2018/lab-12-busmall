import html from '../html.js';
import surveyApi from '../survey-api.js';
import SurveyChart from './survey-chart.js';
import ProductReport from './product-report.js';

function makeTemplate() {
    return html` 
        <main>
            <section class="survey-chart"></section>
            <section class="product-report"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.results = surveyApi.getAll();
    }

    render() {
        const dom = makeTemplate();

        const chartSection = dom.querySelector('.survey-chart');
        const chart = new SurveyChart(this.results);
        chartSection.appendChild(chart.render());

        const reportSection = dom.querySelector('.product-report');
        const report = new ProductReport(this.results);
        reportSection.appendChild(report.render());

        return dom;
    }
}

const app = new ReportApp();
const root = document.getElementById('root');
root.appendChild(app.render());