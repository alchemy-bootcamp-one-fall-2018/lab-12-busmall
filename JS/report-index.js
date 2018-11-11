import ReportApp from './user-report-app.js';

const app = new ReportApp();
const root = document.getElementById('user-text-results');

root.appendChild(app.render());