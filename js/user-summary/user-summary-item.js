import html from '../html.js';

let template = function(product) {
    let name = product.name;
    let views = product.views;
    let clicks = product.clicks;
    let percentage = clicks % views * 100;

    return html`
        <li>${name} had ${clicks} clicks out of ${views} views, equaling ${percentage} percent of selections.
    `;
};

export default class ProductReport {
    constructor(product) {
        this.product = product;
    }

    render() {
        let dom = template(this.product);
        return dom;
    }
}