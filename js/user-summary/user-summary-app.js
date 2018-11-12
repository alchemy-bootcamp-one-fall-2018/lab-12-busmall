// import html from '../html.js';
// import productsApi from '../products-api.js';
// import ProductSelector from '../product-selector.js';

// const products = productsApi.getAll();
// console.log('from user summary app', products);

// function makeTemplate() {
//     return html`
//     <section class="summary-table">
//         <h2>
//             Summary of Results
//         </h2>
//         <div class="user-summary">
//         </div>
//     </section>
// `;
// }

// // class SummaryApp {
// //     render() {
// //         const dom = makeTemplate();
// //         const dataRow = dom.querySelector('.user-summary');
// //         const populateRow = new PopulateRow( {
// //             name = products.name,
// //             views = products.views,
// //             clicks = products.clicks,
// //             percent = (clicks/views * 100),
    
// //             phrase = 'Item ' + name + 'received ' + clicks + ' clicks, out of ' + views + ' views, totaling ' + percent + 'of total votes.',
// //         });
// //             dataRow.appendChild(populateRow.render()),
// //             return dom,
        
// //     }
// // };

// class SummaryApp {
//     render() {
//         const dom = makeTemplate();
//         const dataRow = dom.querySelector('.products-section');
//         const populateRow = new ProductSelector(products, () => {
//             names = populateRow.name, // which way?
//             products.views = views,
//             products.clicks = clicks,
//             percent = (clicks/views * 100),
//             phrase = 'Item ' + names + 'received ' + clicks + ' clicks, out of ' + views + ' views, totaling ' + percent + 'of total votes.',

//             window.location.href = '/user_summary.html';
//         });

//         dataRow.appendChild(populateRow.render());
//         return dom;
//     }
// }

// const summaryApp = new SummaryApp();
// document.getElementById('root').appendChild(summaryApp.render());

// console.log('test from summary app', products);
