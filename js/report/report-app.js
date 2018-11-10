import html from '../html.js';
import surveyApi from '../data-apis/survey-api.js';

function makeTemplate() {
    return html`
        <div class="app">
        <header>I am the header</header>
        <main>I am the main</main>
        </div>
    `;
}

export default class App {
    constructor() {
        this.surveyData = surveyApi.getAll();
    }
    render() {
        const dom = makeTemplate();
        return dom;
    }
}