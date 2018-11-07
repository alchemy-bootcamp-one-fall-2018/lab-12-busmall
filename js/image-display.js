// import productApi from './product-api.js';
import Chosen from './chosen.js';

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
        const imageSection = document.getElementById('imageSection');
        let imageSet = [];
        let lastImageSet = [];
        
        while(imageSet.length < 3) {
            let randomIndex = Math.floor(Math.random() * this.imageList.length);
            
            if(imageSet.includes(this.imageList[randomIndex]) || lastImageSet.includes(this.imageList[randomIndex])) {
                randomIndex = Math.floor(Math.random() * this.imageList.length);
            } else {
                imageSet.push(this.imageList[randomIndex]);
            }
        }
        
        lastImageSet = imageSet;
        imageSection.innerHTML = makeTemplate(imageSet);
        const chosen = new Chosen;
        chosen.render();
    }

}

export default DisplayImage;