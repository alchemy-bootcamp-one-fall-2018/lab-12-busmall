import html from './html.js';
import surveyApi from './survey-api.js';
import ViewingChart from './viewing-chart.js';

function makeTemplate() {
    return html`
        <main>
            <section class="viewing-chart"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.productData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();

        const chartSection = dom.querySelector('.viewing-chart');
        const chart = new ViewingChart(this.productData);
        chartSection.appendChild(chart.render());

        return dom;
    }
}