import html from '../html.js';

function makeTemplate() {
    return html`
        <div class="report-chart">
            Hello!
        </div>
    `;
}

export default class ReportChart {
    render() {
        return makeTemplate();
    }

}