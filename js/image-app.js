import html from './html.js';
import productsApi from './products-api.js';
import Image from './image.js';

const products = productsApi.getAll();
function makeTemplate() {
    return html`
        <header></header>
        <main>
            <h2>Products</h2>
            <ul></ul>
        </main>
    `;
}

class ImageApp {
    render() {
        console.log(products);
        const dom = makeTemplate();

        const imageSection = dom.querySelector('ul');

        const image = new Image();

        // for()

        imageSection.appendChild(image.render());
        
        return dom;
    }
}




export default ImageApp;
 

// function makeTemplate() {
    //     return html`
    //         <h1>Hello World</h1>
    
    //     `;
    // }
    
    // class HelloWorld {
    //     render() {
    //         const dom = makeTemplate();
    //         return dom;
    //     }
    // }