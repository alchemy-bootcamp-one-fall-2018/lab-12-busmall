
import productsApi from './products-api.js';
import ImageDisplay from './display.js';
import html from './html.js';
import surveyApi from './survey-api.js';


function makeTemplate() {
    return html`
       <h1> Pick your favorite product! </h1>

       <div class="image-viewer"> </div>

   `;
}
export default class App {
    constructor() {
        this.images = productsApi.getAll();
    }

    render() {

        let dom = makeTemplate();


        let imageSelector = new ImageDisplay(this.images, image => {

            surveyApi.saveSurvey(image);
        });

        let imageViewer = dom.querySelector('.image-viewer');
        imageViewer.appendChild(imageSelector.render());
        return dom;
    }
}