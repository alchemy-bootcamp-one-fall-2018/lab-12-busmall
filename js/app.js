import productsApi from './products-api.js';
import ImageDisplay from './display.js';
import html from './html.js';
import surveyApi from './survey-api.js';


function makeTemplate() {
    return html`
        <h1> Survey page </h1>

        <div class="image-viewer"> </div>

    `;
}
export default class App {
    constructor() {
        this.images = productsApi.getAll();
    }

    render() {

        let dom = makeTemplate();
        // let firstChannel = this.channels[0];
        // let viewer = new VideoViewer(firstChannel);


        let imageSelector = new ImageDisplay(this.images, image =>{
            image.count++;
            surveyApi.saveSurvey(image);
        });

        let imageViewer = dom.querySelector('.image-viewer');
        imageViewer.appendChild(imageSelector.render());
        return dom;
    }

}