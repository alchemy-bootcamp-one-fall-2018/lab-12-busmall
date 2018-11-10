import html from './html.js';
import surveyApi from '../data-apis/survey-api.js';

function makeTemplate() {
    return html`
        <div class="app">
        <header>Insert header here</header>


        <main>Main</main>

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