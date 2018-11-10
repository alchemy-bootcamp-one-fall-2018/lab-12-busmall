import html from '../html.js';
import surveyApi from '../data-apis/survey-api.js';
import ReportChart from '../report/report-chart.js';

function makeTemplate() {
    return html`
        <div class="app">
        <header>User Summary</header>
        <main>
            <section class="report-survey"></section>
            <section class="user-report"></section>
        </main>
        </div>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();

        const chartSection = dom.querySelector('.report-survey');
        const reportChart = new ReportChart(this.surveyData);
        chartSection.appendChild(reportChart.render());
        return dom;
    }
}