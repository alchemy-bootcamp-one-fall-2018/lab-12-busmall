import html from './html.js';

let makeTemplate = function(image) {
    return html`
        <div class="image">
            <h3><img src="${image.image}"></h3>
        </div>
    `;
};

export default class Image {
    constructor(image, onSelect) {
        this.image = image;
        this.onSelect = onSelect;
    }

    render() {
        let dom = makeTemplate(this.image);

        let div = dom.querySelector('div');
        div.addEventListener('click', () => {
            this.onSelect(this.image);
        });

        return dom;
    }
}


