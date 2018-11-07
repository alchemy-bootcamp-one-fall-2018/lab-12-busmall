// import productApi from './product-api.js';

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

        while(imageSet.length < 3) {
            let randomIndex = Math.floor(Math.random() * this.imageList.length);
            
            if(imageSet.includes(this.imageList[randomIndex])) {
                randomIndex = Math.floor(Math.random() * this.imageList.length);
            } else {
                imageSet.push(this.imageList[randomIndex]);
            }
        }

        imageSection.innerHTML = makeTemplate(imageSet);
    }
    
}

export default DisplayImage;