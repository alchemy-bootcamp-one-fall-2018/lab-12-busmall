import html from './html.js';
import getImages from './product-selector.js';
import Image from './image.js';



//creating template and what gets placed in template
function makeTemplate() {
    return html`

        <div class="display-div"> </div>

    `;
}


// class that calls the template and renders it aka inits it
class ImageDisplay {
    constructor(images, onSelect) { 
        this.images = images;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate();
        const displayDiv = dom.querySelector('.display-div');
        const getImagesRan = getImages();
        console.log('image test ', getImagesRan);
        getImagesRan.forEach(image => {

            let imageComponent = new Image(image, this.onSelect);
            console.log('image comp', imageComponent);
            displayDiv.appendChild(imageComponent.render());
        });
        return dom;

    }
}

export default ImageDisplay;




