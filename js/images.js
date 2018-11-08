import html from './html.js';

let productsTemplate = function(image) {
    return html`
        <div class="image"> <img src="${image.image}" class="Image"
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

        let div = dom.querySelector('.image');
        div.addEventListener('click', () => {
            this.onSelect(this.image);

        });

        return dom;
    }
}
export default Image;



