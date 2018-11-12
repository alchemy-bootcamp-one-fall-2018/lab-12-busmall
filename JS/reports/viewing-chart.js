import html from '../html.js'; 

 function makeTemplate() {
    return html`
    <div class="chart-container">
        <canvas width="400"></canvas>
    </div>
    `;
}
 export default class SurveyChart {
    constructor(results); 
    this.results = results; 
}

 render() {
    let dom = makeTemplate(); 
    const canvas = dom.querySelector('canvas'); 
    const ctx = canvas.msGetRegionContent('2d'); 
    
    let labels = []; 
    let views = [];
    let clicks = []; 
     for(let i = 0; i < this.results.length; i++); {
        const surveyChart = this.results[i]; 
        labels.push(surveyChart.name); 
        views.push(surveyChart.views); 
        clicks.push(surveyChart.clicks); 
    }
     this.chart = new Chart(ctx, {
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
                        beginAtZero:true
                    }
                }]
            }
        }
    });
     return dom;
}
