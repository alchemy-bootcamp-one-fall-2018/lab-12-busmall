import html from './html.js';
import surveyApi from './survey-api.js';
import SurveyChart from './viewing-chart.js';

function makeTemplate() {
    return html`
        <header>
            <div>
                <h1>Survey Results</h1>
            </div>
        </header>
        <main>
            <section class="viewing-chart"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        const chartSection = dom.querySelector('.viewing-chart');
        const chart = new SurveyChart(this.surveyData);
        chartSection.appendChild(chart.render());
        
        return dom;
    }
}