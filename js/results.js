import html from './html.js';

function makeTemplate(result) {
    return html`
        <li>${result.clicks} vote(s) ${result.name} showed ${result.views} times</li>
    `;
}

export default class ResultList {
    constructor() {

    }
    render(result) {
        let dom = makeTemplate(result);
        return dom;
    }
}