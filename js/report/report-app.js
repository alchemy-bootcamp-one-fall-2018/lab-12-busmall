import html from '../html.js';
import productsApi from '../products-api';
import ProductViewingReport from './viewing-report.js';

function makeTemplate() {
    return html`
    <header>
        <h1>BusMall: Survey Report</h1>
    </header>
        <nav>
            <a href="../../index.html"> Home </a>
            <br>
            <a href="./report.html"> Report </a>
        </nav>
    <main>
            <section class="report-view"></section>
        </main>
    `;
}

export default class ReportApp {
    constructor() {
        this.surveyData = productsApi.getAll();
    }

    render() {
        const dom = makeTemplate();

        const reportViewSection = dom.querySelector('.viewing-report');
        const report = new ProductViewingReport(this.surveyData);
        reportViewSection.appendChild(report.render());

        return dom;
    }
}