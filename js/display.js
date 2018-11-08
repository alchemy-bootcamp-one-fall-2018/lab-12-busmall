import html from './html.js';
import Image from './images.js';
import getImages from './products-selector.js';

function makeTemplate() {
    return html`
        <ul class="image-list"></ul>
    `;
}


export default class Display {
    constructor(images, onDone) {
        this.images = images;
        this.onDone = onDone;
        this.totalRounds = 0;
    }

    renderList() {
        while(this.list.lastElementChild) {
            this.list.lastElementChild.remove();
        }

        const imageRandom = getImages();
        imageRandom.forEach(image => {
            let imageComp = new Image(image, selected => {
                
                this.totalRounds++;
                console.log(this.totalRounds);
    
                // increase click count
                selected.clicks++;
    
                // show three new random images
                this.renderList();
            });
            this.list.appendChild(imageComp.render());
        });
    }
    render() {
        let dom = makeTemplate();
        this.list = dom.querySelector('ul');
        this.renderList();

        return dom;
    }
}