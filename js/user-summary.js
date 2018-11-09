import surveyApi from './survey-api.js';

function makeTemplate(results) {
    let html = '';

    results.forEach(result => {
        html += `<ul>
            <li>Product Name: ${result.name}</li>
            <li>Views: ${result.views}</li>
            <li>Clicks: ${result.clicks}</li>
            </ul>
        `;
    });

    return html;
}

class UserSummary {
    constructor() {        
        const resultsHtml = document.getElementById('resultsHtml');
        
        if(resultsHtml){
            const storedResults = surveyApi.getSession();
            
            resultsHtml.innerHTML = makeTemplate(storedResults);
        }
    }
    
    render(bool) {
        const goToChart = document.getElementById('goToChart');
        
        if(bool){
            window.location = 'html/user-summary.html';
        }

        if(goToChart) {
            goToChart.addEventListener('click', () => {
                window.location = 'data-chart.html';
            });
        }

    }
}


export default UserSummary;