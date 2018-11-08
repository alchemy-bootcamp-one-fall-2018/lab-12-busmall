import html from './html.js';

let productsTemplate = function(image) {
    return html`
        <div class="image">
            <h3>${image}</h3>
        </div>
    `;
};

class Image {
    constructor(image, onSelect) {
        this.image = image;
        this.onSelect = onSelect;
    }

    render() {
        let dom = productsTemplate(this.image);

        let div = dom.querySelector('div');
        div.addEventListener('click', () => {
            this.onSelect(this.image);

        });

        return dom;
    }
}
export default Image;



