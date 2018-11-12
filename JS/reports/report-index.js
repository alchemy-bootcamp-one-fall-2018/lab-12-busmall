import ReportApp from './report-app.js';

const root = document.getElementById('report-root');
const app = new ReportApp();
root.appendChild(app.render());