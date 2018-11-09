import surveyApi from './survey-api.js';

function makeTemplate(canvas, info) {
    const ctx = canvas.getContext('2d');

    let labels = [];
    let views = [];
    let clicks = [];

    info.forEach(set => {
        if(!labels.includes(set.name)) {
            labels.push(set.name);
            views.push(set.views);
            clicks.push(set.clicks);
        }
    });

    /* eslint-disable-next-line */
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '# of Views',
                    data: views,
                    backgroundColor: 'green',
                    borderColor: 'black',
                    borderWidth: 1
                },
                {
                    label: '# of Clicks',
                    data: clicks,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'black',
                    borderWidth: 1
                },
                
            ]
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
}

class DataChart {
    render() {
        const canvasViews = document.getElementById('session');
        const canvasTotalViews = document.getElementById('total');

        const session = surveyApi.getSession();
        const allSessions = surveyApi.getDisProds();

        if(canvasViews) {
            makeTemplate(canvasViews, session);
            makeTemplate(canvasTotalViews, allSessions);
        }

    }

}

export default DataChart;