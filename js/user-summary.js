import html from '../html.js';
import SummaryDisplay from './user-summary-display.js';

function makeTemplate() {
    return html`
        <ul class="user-summary"></ul>
    `;
}

export default class Usersummary {
    constructor(results) {
        this.results = results;
    }
    render() {
        const dom = makeTemplate();
        const list = dom.querySelector('.user-summary');

        this.results.forEach(channel => {
            const summaryDisplay = new SummaryDisplay(channel);
            list.appendChild(summaryDisplay.render());
        });
        return dom;
    }
}