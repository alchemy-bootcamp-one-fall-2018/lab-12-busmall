import html from './html.js';
import surveyApi from './survey-api.js';
import ViewingReport from './viewing-report.js';

function makeTemplate() {
    return html`
        <main>
            <section class="viewing-report">
            <ul id="product-report"></ul>
            </section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }

    render() {
        const dom = makeTemplate();
        const reportSection = dom.querySelector('#product-report');

        this.surveyData.forEach(product => {
            const report = new ViewingReport(product);
            reportSection.appendChild(report.render());
        });

        return dom;
    }
}