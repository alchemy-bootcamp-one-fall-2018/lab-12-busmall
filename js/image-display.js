// import productApi from './product-api.js';

class DisplayImage {
    constructor(imageList) {
        this.imageList = imageList;
    }

    display() {
        const imageSection = document.getElementById('imageSection');
        var html = '';
        
        
        this.imageList.forEach(item => {
            html += `
            <img class="product" src="${item.image_url}">`;
        });
        imageSection.innerHTML = html;
        const surveyItems = document.querySelectorAll('.product');
        
        surveyItems.forEach(item => {
            item.addEventListener('click', () => {
                console.log('clicked image');
            });
        });
    }
}

export default DisplayImage;