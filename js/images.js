import html from './html.js';

let template = function(image) {
    return html`
        <div class="product-image">
            <img src="${image}">
        </div>
        
    `;
};

export default class Image {
    constructor(image, onSelect) {
        this.image = image;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.image.image);

        let div = dom.querySelector('div');
        div.addEventListener('click', () => {
            this.onSelect(this.image);
        });
        return dom;
    }
}



