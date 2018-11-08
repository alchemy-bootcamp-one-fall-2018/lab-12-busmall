import html from './html.js';
import productsApi from './products-api.js';
import Display from './display.js';





function makeTemplate() {
    return html`
        <h1>Survey: Pick Your Favorite Product</h1>
        <div class="image-viewer"></div>
    `;
}

export default class App {
    constructor() {
        this.images = productsApi.getAll();
    }
    render() {

        let dom = makeTemplate();

        const displayContainer = dom.querySelector('.image-viewer');
        const display = new Display(this.images);
        displayContainer.appendChild(display.render());


        return dom;
    }
}









// function makeTemplate() {
//     return html`
//         <h1>Survey: What's Your Favorite Product:<h1>
//         <section> <img src="${display[0].image}" class="align-image image-background"> </section>
//         <section> <img src="${display[1].image}" class="align-image image-background"> </section>
//         <section> <img src="${display[2].image}" class="align-image image-background"> </section>
//     `;
// }

