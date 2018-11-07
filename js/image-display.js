// import productApi from './product-api.js';
import Chosen from './chosen.js';
import UserSummary from './user-summary.js';

let lastImageSet = [];
let count = 0;

function makeTemplate(imageList) {
    let html = '<h1>Choose Wisely, you cannot go back!</h1>';
    
    imageList.forEach(item => {
        html += `
        <img name="${item.name}" class="product" src="${item.image_url}">`;
    });

    return html;
}

class DisplayImage {
    constructor(imageList) {
        this.imageList = imageList;
    }
    
    render() {
        const imageSection = document.getElementById('imageSection');
        let imageSet = [];
        
        if(count < 4) {
            while(imageSet.length < 3) {
                let randomIndex = Math.floor(Math.random() * this.imageList.length);
                
                if(imageSet.includes(this.imageList[randomIndex]) || lastImageSet.includes(this.imageList[randomIndex])) {
                    randomIndex = Math.floor(Math.random() * this.imageList.length);
                } else {
                    imageSet.push(this.imageList[randomIndex]);
    
                    this.displayedProducts = this.imageList[randomIndex];
    
                    if(this.displayedProducts.views > 0) {
                        this.displayedProducts.views = this.displayedProducts.views + 1;
                    } else {
                        this.displayedProducts.views = 1;
                    }
                }
            }
            
            lastImageSet = imageSet;
            if(imageSection) {
                imageSection.innerHTML = makeTemplate(imageSet);
            }
            const chosen = new Chosen;
            chosen.render();
            count++;

        } else {
            // let summary = new UserSummary([1, 2, 3, 4]);
            // summary.render();
        }
    }

}

export default DisplayImage;