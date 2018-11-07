import html from './html.js';

function makeTemplate() {
    return html`
        <li>
            This is an image.
        </li>

    `;

}

class Image {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}

export default Image;