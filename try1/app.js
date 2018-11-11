import html from '../js/html.js';
import ImageSelector from './products-api.js';

function makeTemplate() {
    return html`
    <div class="app">
        <header>
            <h1>Marketing App</h1>
        </header>
        <p>Please pick the one that you like best.</p>
    </div>
    <div>
        <section class="random-pics-container"></section>
    </div>
`;
}

class App {
    render() {
        const dom = makeTemplate();
        const imageSelectorContainer = dom.querySelector('.random-pics-container');
        const imageSelector = new ImageSelector();
        imageSelectorContainer.appendChild(imageSelector.render());

        return dom;
    }
}


const root = document.getElementById('root');
const app = new App();
const dom = app.render();
root.appendChild(dom);

