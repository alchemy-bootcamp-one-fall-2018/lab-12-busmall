import html from './html.js';

//creating template and what gets placed in template
function makeTemplate() {
    return html`
        <h1> Survey page </h1>
        <section>${display[0].image}</section>
        <section>${display[1].image}</section>
        <section>${display[2].image}</section>

    `;
}


// class that calls the template and renders it aka inits it
class Header {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}

export default Header;



