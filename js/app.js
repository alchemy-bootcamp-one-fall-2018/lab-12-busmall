import products from './product-list.js';
import html from './html.js';
import RandomPics from './product-list.js';

function makeTemplate() {
    return html`
    <div class="app">
        <header>
            <h1>Pick 1 of 3 :)</h1>
        </header>

        <main>
            <p>There will be 3 random pictures shown.  Please pick the one that you like best of the three.</p>
            <section class="random-pics-container"></section>
        </main>
    </div>
`;
}

class App {
    render() {
        const dom = makeTemplate();
        const randomPicsContainer = dom.querySelector('.random-pics-container');
        const randomPics = new RandomPics();
        randomPicsContainer.appendChild(randomPics.render());

        return dom;
    }
}


const root = document.getElementById('root');
const app = new App();
const dom = app.render();
root.appendChild(dom);

