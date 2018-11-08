import html from './html.js';
import surveyApi from '../api/survey-api.js';

const surveys = surveyApi.getAll();

function makeTemplate() {
    return html`
        <header>
            <div>
                <h1>BusMall</h1>
            </div>
            <nav>
                <a href="./">Home</a>
            </nav>
        </header>
        <main> 
            <section>  
                <h2>Survey Complete!</h2>
                <pre></pre>
            </section>
        </main>`;
}

class CompleteApp {
    render() {
        const dom = makeTemplate();

        const pre = dom.querySelector('pre');
        
        const lastSurvey = surveys[surveys.length - 1];
        pre.textContent = JSON.stringify(lastSurvey, true, 2);

        return dom;
    }
}

const completeApp = new CompleteApp();
document.getElementById('root').appendChild(completeApp.render());
