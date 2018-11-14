import html from './html.js';
import products from './product-list.js';

function makeTemplate() {
    return html`
        <li>This is a list</li>
        <li><img src="${products.img}>
    `;
}

export default class Image {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}