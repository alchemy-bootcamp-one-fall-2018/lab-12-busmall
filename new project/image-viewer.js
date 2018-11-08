import html from './js/html.js';

let makeTemplate = function(images) {
    return html`
    <div id="image-viewer">
        <section>
            <div> <img src="${display[0].image}" id="imageOne"> </div>
            <div> <img src="${display[1].image}" id="imageTwo"> </div>
            <div> <img src="${display[2].image}" id="imageThree"> </div>
            </section>
    </div>
    `;
};

export default class ImageViewer {
    constructor(images) {
        this.images = images;

    }
    update(images) {
        this.images = images;
        this.
    }
    render() {
        let dom = template(this.channel);

        this.
    }
}