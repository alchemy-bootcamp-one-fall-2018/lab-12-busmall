import Images from '../js/images.js';
//import ImageSelector from './display';


const images = new Images();
const root = document.getElementById('root');
root.appendChild(images.render());



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


       let imageSelector = new ImageDisplay(this.images, image => {


           image.count++;
           surveyApi.save();
       });

       let imageViewer = dom.querySelector('.image-viewer');
       imageViewer.appendChild(imageSelector.render());
   }
}


