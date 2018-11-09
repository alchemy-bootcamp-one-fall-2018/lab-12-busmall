import html from './html.js';
import productApi from './products-api.js';
import ImageSelector from './image-selector.js';

const products = productApi.getAll();

function makeTemplate() {
    return html`
    <div class="app">
        <h1>Marketing App</h1>
        <section class="image-selector"></section>
    </div>
        
`;
}

class App {
    render() {
        const dom = makeTemplate();
        const imageSelectorContainer = dom.querySelector('.image-selector');
        const imageSelector = new ImageSelector(products);
        imageSelectorContainer.appendChild(imageSelector.render());
        return dom;
    }
}

const root = document.getElementById('root');
const app = new App();
const dom = app.render();
root.appendChild(dom);