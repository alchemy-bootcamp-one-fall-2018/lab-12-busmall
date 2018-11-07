import productsApi from './product-list.js';
import html from './html.js';

const products = productsApi.getAll();

function makeTemplate() {
    return html`
        <header>
            Pick One!
        </header>
        <li>
            <img src=${products.img} style="width: 100px">
            <button class="vote">VOTE</button>
        </li>
    `;
    
}
makeTemplate();
class displayApp {
    render() {

    }
}
displayApp();