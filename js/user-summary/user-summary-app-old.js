// import html from '../html.js';
// import productsApi from '../products-api.js';
// import ProductSelector from '../product-selector.js';

// const products = productsApi.getAll();

// function makeTemplate() {
//     return html`
//     <section class="summaryTable">
//         <h2>
//             Summary of Results
//         </h2>
//         <div id="user-summary">
//         </div>
//     </section>
// `;
// }

// class SummaryApp {
//     render() {
//         const dom = makeTemplate();
//         const infoRow = dom.querySelector('#user-summary');

//         const productSelector = new ProductSelector(products, () => {
//             window.location.href = '/user_summary.html';
//         });

//         infoRow.appendChild(productSelector.render());
//         return dom;
//     }
// }

// const summaryApp = new SummaryApp();
// document.getElementById('root').appendChild(summaryApp.render());
