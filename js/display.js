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
            products[index].view++;
            display.push(products[index]);
        } 
    }
    return display;
}



//creating template and what gets placed in template
function makeTemplate() {
    return html`

        <div class="display-div"> </div>

    `;
}


let totalCount = 0;

// class that calls the template and renders it aka inits it
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
                while(this.displayDiv.firstChild) {
                    this.displayDiv.removeChild(this.displayDiv.firstChild);
                }

                this.renderImages();
                totalCount++;
                if(totalCount === 25){
                    surveyApi.add(products);
                    window.location.replace('../reports.html');
                }
            });
            this.displayDiv.appendChild(imageComponent.render());   
        }
    }
}


export default ImageDisplay;