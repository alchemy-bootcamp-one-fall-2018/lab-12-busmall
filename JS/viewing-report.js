import html from './html.js';

let template = function(product) {

    let name = product.name;
    let clicks = product.clicks;
    let views = product.views;

    return html`
        <li>${name} resulted in ${clicks} clicks and ${views} views. </li>
    `;
};

export default class ViewingReport {

    constructor(product) {
        this.product = product;
    }

    render() {
        let dom = template(this.product);
        return dom;
    }
}