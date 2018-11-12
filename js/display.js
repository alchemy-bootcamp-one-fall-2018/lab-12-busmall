import html from './html.js';
import Image from './images.js';
import getImages from './product-selector';

function makeTemplate() {
    return html`
        <div class="image-list"></div>
    `;
}

class ImageSelector {
    constructor(images, onSelect) {
        this.images = images;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate();
        const div = dom.querySelector('.image-list');
        const getRandom = getImages();
        getRandom.forEach(image => {
            let imageComponent = new Image(image, this.onSelect);
            div.appendChild(imageComponent.render());
        });
        //.views++
        return dom;
    }
}

export default ImageSelector;