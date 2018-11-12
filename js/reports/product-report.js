import html from '../html.js';
import ReportItem from './report-item.js';

function makeTemplate() {
    return html` 
        <ul class="product-list"></ul>
    `;
}

export default class ProductReport {
    constructor(results) {
        this.results = results;
    }

    render() {
        const dom = makeTemplate();
        const list = dom.querySelector('.product-list');

        this.results.forEach(product => {
            const reportItem = new ReportItem(product);
            list.appendChild(reportItem.render());
        });

        return dom;
    }

}