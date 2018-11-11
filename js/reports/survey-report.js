import html from '../html.js';
import ReportItem from './survey-report-item.js';

function makeTemplate() {
    return html`
        <ul class="survey-report"></ul>
    `;
}

export default class SurveyReport {
    constructor(results) {
        this.results = results;
    }

    render() {
        const dom = makeTemplate();
        const list = dom.querySelector('.survey-report');

        this.results.forEach(product => {
            const reportItem = new ReportItem(product);
            list.appendChild(reportItem.render());
        });

        return dom;
    }
}