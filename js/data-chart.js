import surveyApi from './survey-api.js';

function makeTemplate(canvas, info, key) {
    const ctx = canvas.getContext('2d');

    let labels = [];
    let data = [];

    info.forEach(set => {
        if(!labels.includes(set.name)) {
            labels.push(set.name);
            data.push(set[key]);
        }
    });

    /* eslint-disable-next-line */
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Views',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'black',                
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
}

class DataChart {
    render() {
        const canvasViews = document.getElementById('views');
        const canvasClicks = document.getElementById('clicks');
        const canvasTotalViews = document.getElementById('totalViews');
        const canvasTotalClicks = document.getElementById('totalClicks');
        const session = surveyApi.getSession();
        const allSessions = surveyApi.getDisProds();

        if(canvasViews) {
            makeTemplate(canvasViews, session, 'views');
            makeTemplate(canvasClicks, session, 'clicks');
            makeTemplate(canvasTotalViews, allSessions, 'views');
            makeTemplate(canvasTotalClicks, allSessions, 'clicks');
        }

    }

}

export default DataChart;