import html from '../html.js';
import surveyApi from '../survey-api.js';
import SurveyChart from './survey-chart.js';

function makeTemplate() {
    return html` 
        <main>
            <section class="survey-chart"></section>
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

        return dom;
    }
}

const app = new ReportApp();
const root = document.getElementById('root');
root.appendChild(app.render());