import html from '../html.js';

let template = function(product) {
    return html`
        <li>${product.name} had ${product.views} views and ${product.clicks} clicks.</li>
    `;
};

export default class ReportItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        let dom = template(this.product);
        return dom;
    }
}