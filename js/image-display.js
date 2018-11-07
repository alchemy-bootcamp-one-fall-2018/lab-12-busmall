// import productApi from './product-api.js';
import Chosen from './chosen.js';

let lastImageSet = [];
let count = 0;

function makeTemplate(imageList) {
    let html = '';
    
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
        console.log(count);
        const imageSection = document.getElementById('imageSection');
        let imageSet = [];
        
        if(count < 3) {
            while(imageSet.length < 3) {
                let randomIndex = Math.floor(Math.random() * this.imageList.length);
                
                if(imageSet.includes(this.imageList[randomIndex]) || lastImageSet.includes(this.imageList[randomIndex])) {
                    randomIndex = Math.floor(Math.random() * this.imageList.length);
                } else {
                    imageSet.push(this.imageList[randomIndex]);
    
                    let displayedProducts = this.imageList[randomIndex];
    
                    if(displayedProducts.views > 0) {
                        displayedProducts.views = displayedProducts.views + 1;
                    } else {
                        displayedProducts.views = 1;
                    }
    
                    console.log(displayedProducts);
                }
            }
            
            lastImageSet = imageSet;
            console.log(lastImageSet);
            imageSection.innerHTML = makeTemplate(imageSet);
            const chosen = new Chosen;
            chosen.render();

            count++;
        } else {
            window.location = '../html/user-summary.html';
        }
    }

}

export default DisplayImage;