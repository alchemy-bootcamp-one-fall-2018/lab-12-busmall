
import html from './html.js';
import Image from './image.js';
import productsApi from './products-api.js';
import surveyApi from './survey-api.js';

let products = productsApi.getAll();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getImages() {   
    let display = [];
    
    while(display.length < 3) {
        let index = getRandomInt(products.length); 
        if(display.includes(products[index]) === false) {
            products[index].views += 1;
            display.push(products[index]);
        } 
    }
    return display;
}

function makeTemplate() {
    return html`

        <div class="display-div"> </div>

    `;
}

let totalCount = 0;

class ImageDisplay {

    constructor(images, onSelect) { 
        this.images = images;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate();
        this.displayDiv = dom.querySelector('.display-div');

        this.renderImages();
        return dom;
       
    }
    renderImages() {
        let display = getImages();
                
        for(var i = 0; i < display.length; i++){
            let imageComponent = new Image(display[i], onClick => {
                onClick.count += 1;
                surveyApi.add(onClick);
                while(this.displayDiv.firstChild) {
                    this.displayDiv.removeChild(this.displayDiv.firstChild);
                }

                this.renderImages();
                totalCount++;
                if(totalCount === 24) {
                    surveyApi.add(products);
                    window.location.replace('../reports.html');
                }
            });
            this.displayDiv.appendChild(imageComponent.render());   
        }
    }
}

export default ImageDisplay;