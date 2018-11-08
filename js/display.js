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
        let dom = makeTemplate();
        const div = dom.querySelector('div');
        imageRandom = getImages();
        imageRandom.forEach(image => {
            let imageComp = new Image(image.image, this.onSelect);
            div.appendChild(imageComp.render());
        });
        .views++
        return dom;
    }
}

export default ImageSelector;