
function makeTemplate(results) {
    let html = '<ul>';

    results.forEach(result => {
        html += `
            <li>Product Name: ${result.name}<br>
            Views: ${result.views}<br>
            Clicks: ${result.clicks}</li>
            </ul>
        `;
    });

    return html;
}

class UserSummary {
    constructor(results) {
        this.results = results;
        console.log('results in summary', this.results);
    }
    
    render() {
        console.log(makeTemplate(this.results));
        window.location = '../html/user-summary.html';

        
    }
}

export default UserSummary;