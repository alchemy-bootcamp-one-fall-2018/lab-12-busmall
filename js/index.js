import App from './app.js';
console.log('Oogly Moogly Foo Bar');
const root = document.getElementById('root');
const app = new App();
const dom = app.render();
root.appendChild(dom);
