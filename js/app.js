import html from './html.js';
import RandomPics from './product-list.js';

function makeTemplate() {
    return html`
    <div class="app">
        <header>
            <h1>Pick 1 of 3 :)</h1>
        </header>
        <p>There will be 3 random pictures shown.  Of the three pictures shown, please pick the one that you like best.</p>
    </div>

        
            <section class="random-pics-container"></section>
        
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

