import html from '../html.js';
import ReportItem from './user-report-item.js';

function makeTemplate() {
    return html`
        <ul class="user-report"></ul>
    `;
}

export default class UserReport {
    constructor(results) {
        this.results = results;
    }

    render() {
        const dom = makeTemplate();
        const list = dom.querySelector('.user-report');

        this.results.forEach(channel => {
            const reportItem = new ReportItem(channel);
            list.appendChild(reportItem.render());
        });

        return dom;
    }
}