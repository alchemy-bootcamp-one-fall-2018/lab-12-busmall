import html from '../html.js';

function makeTemplate() {
    return html`
        <div class="app">
        <header>I am the header</header>

        <main>I am the main</main>

        </div>
    `;
}

export default class App {
    render() {
        const dom = makeTemplate();
        
    }
}