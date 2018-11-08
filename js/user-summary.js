
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
            const storedResults = JSON.parse(localStorage.getItem('results'));
            
            resultsHtml.innerHTML = makeTemplate(storedResults);
        }
    }
    
    render(bool) {
        if(bool){
            window.location = '../html/user-summary.html';
        }
    }
}


export default UserSummary;