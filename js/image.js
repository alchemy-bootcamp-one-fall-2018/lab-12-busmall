import html from './html.js';

function makeTemplate() {
    return html`
        <li>This is a list</li>
        <li>
    `;
}

export default class Image {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}