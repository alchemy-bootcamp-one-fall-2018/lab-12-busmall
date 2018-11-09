import html from '../html.js';

function makeTemplate() {
    return html`
        <main>
            Report Summary
        </main>
    `;
}

export default class ReportApp {
    render() {
        const dom = makeTemplate();
        
        return dom;
    }
}