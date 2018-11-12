import html from '../html.js';
import surveyApi from '../survey-api.js';
import ViewingReport from './viewing-report.js';
import SurveyChart from './survey-chart.js';

function makeTemplate() {
    return html`
        <main>
            <section class="survey-chart"></section>
            <h2>Product Selection Report</h2>
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
        const chart = new SurveyChart(this.surveyData);
        chartSection.appendChild(chart.render());

        const reportSection = dom.querySelector('.product-report');
        const report = new ViewingReport(this.surveyData);
        reportSection.appendChild(report.render());
        
        return dom;
    }
}

const app = new ReportApp();
const root = document.getElementById('report-root');
root.appendChild(app.render());

