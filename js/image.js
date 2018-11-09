import html from './html.js';

let template = function(image) {
    console.log('this is an image', image);
    return html `
        <div class="single-image"> <img src="${image.image}"> </div>
    `;
};


export default class Image {
    constructor(image, onSelect){ 
        this.image = image;
        this.onSelect = onSelect;
    }

    render() {
        let dom = template(this.image);

        let imageDiv = dom.querySelector('.single-image');
        imageDiv.addEventListener('click', ()=> {

            console.log('product name is', this.image.name);

            this.onSelect(this.image);
        });
        return dom;
    }
}