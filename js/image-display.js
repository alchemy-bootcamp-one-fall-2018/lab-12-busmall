import Chosen from './chosen.js';
import surveyApi from './survey-api.js';

let count = 0;
let lastIndex = [];

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
        let currentIndex = [];
        
        console.log('last image index', lastIndex);
        if(count < 4) {
            while(imageSet.length < 3) {
                let randomIndex = Math.floor(Math.random() * this.imageList.length);
                console.log('randomIndex', randomIndex);
                this.imageList = surveyApi.getDisProds();
                
                // if(imageSet.includes(this.imageList[randomIndex]) || lastImageSet.includes(this.imageList[randomIndex])) {
                if(currentIndex.includes(randomIndex) || lastIndex.includes(randomIndex)){
                    randomIndex = Math.floor(Math.random() * this.imageList.length);
                } else {
                    currentIndex.push(randomIndex);
                    imageSet.push(this.imageList[randomIndex]);

                    this.imageList[randomIndex].views = this.imageList[randomIndex].views + 1;
                    surveyApi.storeDisProd(this.imageList);
                }
            }
            console.log('current image index', currentIndex);
            
            lastIndex = currentIndex;
            if(imageSection) {
                imageSection.innerHTML = makeTemplate(imageSet);
            }
            
            Chosen.render();
            count++;
        }
    }
};

export default DisplayImage;