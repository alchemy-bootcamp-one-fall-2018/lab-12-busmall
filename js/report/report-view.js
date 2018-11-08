import html from '../html.js';
import SurveyReport from './viewing-report-item.js';

function makeTemplate() {
    return html`
        <ul class="report-view"></ul>
    `;
}

export default class ProductViewingReport {
    constructor(results) {
        this.results = results;
    }

    render() {
        const dom = makeTemplate();
        const list = dom.querySelector('.report-view');

        this.results.forEach(survey => {
            const reportListItem = new SurveyReport(survey);
            list.appendChild(reportListItem.render());
        });

        return dom;
    }
}