import html from './html.js';
import workingArray from './product-api.js'; 

function makeTemplate() {
    return html`
        <h1>Hello World</h1>
    `;
}

class HelloWorld {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}



console.log(workingArray.getAll());

export default HelloWorld;