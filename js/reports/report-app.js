import html from '../html.js';
import surveyApi from '../survey-api.js'; 
import SurveyChart from './survey-chart.js';
import SurveyReport from './survey-report.js';

function makeTemplate() {
    return html`
        
        <main>
            <h1>BusMall Survey Report</h1>
            <section class="survey-chart"></section>
            <h2>Report</h2>
            <section class="survey-report"></section>
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

        const reportSection = dom.querySelector('.survey-report');
        const report = new SurveyReport(this.surveyData);
        reportSection.appendChild(report.render());

        return dom;
    }
}

const app = new ReportApp();
document.getElementById('root').appendChild(app.render());