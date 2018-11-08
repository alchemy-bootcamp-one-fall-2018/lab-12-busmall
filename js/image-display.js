import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
// import productApi from './product-api.js';

let lastImageSet = [];
let count = 0;

function makeTemplate(imageSet) {
    let html = '<h1>Choose wisely, you cannot go back!</h1>';
    
    imageSet.forEach(item => {
        html += `
        <img name="${item.name}" class="product" src="${item.image_url}">`;
    });

    return html;
}

const DisplayImage = {
    constructor() {
        this.imageList = surveyApi.getDisProds();
        this.imageList = this.imageList.map(image => {
            if(!image.views) {
                image.views = 0;
            }
            return image;
        });
        surveyApi.storeDisProd(this.imageList);
    },
    
    render() {
        const imageSection = document.getElementById('imageSection');
        let imageSet = [];
        // this.imageList = surveyApi.getDisProds();
        
        if(count < 4) {
            while(imageSet.length < 3) {
                let randomIndex = Math.floor(Math.random() * this.imageList.length);
                this.imageList = surveyApi.getDisProds();
                
                if(imageSet.includes(this.imageList[randomIndex]) || lastImageSet.includes(this.imageList[randomIndex])) {
                    randomIndex = Math.floor(Math.random() * this.imageList.length);
                } else {
                    imageSet.push(this.imageList[randomIndex]);

                    this.imageList[randomIndex].views = this.imageList[randomIndex].views + 1;
                    surveyApi.storeDisProd(this.imageList);
                }
            }
            
            lastImageSet = imageSet;
            if(imageSection) {
                imageSection.innerHTML = makeTemplate(imageSet);
            }
            
            Chosen.render();
            count++;
        }
    }
};

export default DisplayImage;