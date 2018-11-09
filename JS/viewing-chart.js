import html from './html.js';



function makeTemplate() {
    return html`
        <h2>Chart</h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
    `;
}

export default class SurveyChart {
    constructor(results) {
        this.results = results;
    }

    render(){
        let dom = makeTemplate();
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];



        for(let i = 0; i < this.results.length; i++) {
            const survey = this.results[i];
            console.log(survey.name, survey.views);
            labels.push(survey.name);
            data.push(survey.views);
        }
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: data,
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
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        return dom;
    }
}