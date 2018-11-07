
function makeTemplate(results) {
    let html = '<ul>';

    results.forEach(result => {
        html += `
            <li>Product Name: ${result.name}
            <li>Views: ${result.views}</li>
            <li>Clicks: ${result.clicks}</li>
            </ul>
        `;
    });

    return html;
}

class UserSummary {
    constructor() {
        // this.results = results;
        
        const resultsHtml = document.getElementById('resultsHtml');
        console.log('summary render called');
        
        if(resultsHtml){
            const storedResults = JSON.parse(localStorage.getItem('results'));
            console.log('storedResults', storedResults);
            resultsHtml.innerHTML = makeTemplate(storedResults);
        }
    }
    
    render() {
        window.location = '../html/user-summary.html';
    }
}


export default UserSummary;