// import productApi from './product-api.js';

function makeTemplate(imageList) {
    let html = '';
    
    imageList.forEach(item => {
        html += `
        <img class="product" src="${item.image_url}">`;
    });

    return html;
}

class DisplayImage {
    constructor(imageList) {
        this.imageList = imageList;
        this.temp = [];
        
        while(this.temp.length < 3) {
            this.randomIndex = Math.floor(Math.random() * this.imageList.length);

            console.log(this.randomIndex);
            
            if(this.temp.includes(this.randomIndex)) {
                this.randomIndex = Math.floor(Math.random() * this.imageList.length);
            } else {
                this.temp.push(this.randomIndex);
            }
        }

        console.log(this.temp);
    }

    render() {
        const imageSection = document.getElementById('imageSection');
        
        imageSection.innerHTML = makeTemplate(this.imageList);

        //
    }
}

export default DisplayImage;