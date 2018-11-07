import html from './html.js';

function makeTemplate() {
    return html`
    <div class="app">
        <header>
            <h1>I am the App</h1>
        </header>

        <main>
            <p>I am text in the app component</p>
        </main>
    </div>
`;
}

export default class App {
    render() {
        const dom = makeTemplate();



        return dom;
    }
}