import html from './html.js'; 

function makeTemplate() {
    return html`
        <li>
        <img class="product">
        </li>
   
    `; 
}

class ImageDisplay {

    constructor(product, onSelect) {
        this.product = product; 
        this.randomImages = []; 
        this.onSelect = onSelect; 
        console.log('hi', product);  
    }

    render() { 
        this.getImage(); 
        
        const dom = makeTemplate(this.product); 
        const listItem = dom.querySelector('img'); 
        listItem.addEventListener('click', () => {
            this.onSelect(this.product); 
        }); 


        for(var i = 0; i < 3; i++) {
            listItem.src = this.randomImages[i].image; 
            this.randomImages[i].views++; 
        }

        return dom;
    }
    getImage() {
        for(let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * 22);
            this.randomImages.push(this.product[index]); 

        }
    } 
}

export default ImageDisplay; 