import Chosen from './chosen.js';
import surveyApi from './survey-api.js';
import productApi from './product-api.js';

let count = 0;
let lastIndex = [];

function makeTemplate(imageSet) {
    let html = '<h1>Choose wisely, you cannot go back!</h1>';
    
    imageSet.forEach(item => {
        html += `
        <img name="${item.name}" class="product" src="assets/${item.image_url}">`;
    });

    return html;
}

const DisplayImage = {
    init() {
        this.imageList = surveyApi.getDisProds();
        this.imageList = this.imageList.map(image => {
            if(!image.views) {
                image.views = 0;
            }
            return image;
        });
        surveyApi.storeDisProd(this.imageList);

        this.session = productApi.getAll();
        
        this.session = this.session.map(product => {
            product.views = 0;
            return product;
        });
        
        surveyApi.storeSession(this.session);
    },
    
    render() {
        const imageSection = document.getElementById('imageSection');
        let imageSet = [];
        let currentIndex = [];
        this.session = surveyApi.getSession();
        
        if(count < 25) {
            while(imageSet.length < 3) {
                let randomIndex = Math.floor(Math.random() * this.imageList.length);
                this.imageList = surveyApi.getDisProds();
                
                if(currentIndex.includes(randomIndex) || lastIndex.includes(randomIndex)){
                    randomIndex = Math.floor(Math.random() * this.imageList.length);
                } else {
                    currentIndex.push(randomIndex);
                    imageSet.push(this.imageList[randomIndex]);

                    this.imageList[randomIndex].views = this.imageList[randomIndex].views + 1;
                    surveyApi.storeDisProd(this.imageList);

                    this.session[randomIndex].views++;
                    surveyApi.storeSession(this.session);
                }
            }
            
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