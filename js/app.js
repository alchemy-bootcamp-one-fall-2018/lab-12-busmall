import ImageApp from './image-app.js';
// import HelloWorld from './image-app.js';
// import productsApi from './products-api.js';

const imageApp = new ImageApp();
// const helloWorld = new HelloWorld();
const root = document.getElementById('root');
// root.appendChild(helloWorld.render());
root.appendChild(imageApp.render());





