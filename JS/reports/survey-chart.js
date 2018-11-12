import html from '../html.js'; 

function makeTemplate() {
    return html`
    <div class="chart-container">
        <canvas width="600"></canvas>
    </div>
    `;
}
export default class SurveyChart {
    constructor(results) {
        this.results = results; 
    }

    render() {

        let dom = makeTemplate(); 
        const canvas = dom.querySelector('canvas'); 
        const ctx = canvas.getContext('2d'); 
        
        let labels = []; 
        let views = [];
        let clicks = []; 

        const products = JSON.parse(localStorage.getItem('products'));
        // console.log('hello, its me', products);

        for(let i = 0; i < products.length; i++) {
            labels.push(products[i].name);
            views.push(products[i].views);
            clicks.push(products[i].clicks);
        }

        this.chart = new SurveyChart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: views,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }, 
                {
                    label: '# of Clicks',
                    data: clicks,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            autoSkip: false
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: false
                        }
                    }]
                }
            }
        });
        return dom;
    }
}