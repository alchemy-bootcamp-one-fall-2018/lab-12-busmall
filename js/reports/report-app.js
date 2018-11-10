import html from '../html.js';
import surveyApi from '../survey-api.js';
import ViewChart from './view-chart.js';



function makeTemplate() {
    return html`
        <main>
            <section class="chart"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();

        const chartSection = dom.querySelector('.chart');
        const chart = new ViewChart(this.surveyData);
        
        chartSection.appendChild(chart.render());
        
        return dom;
    }
}