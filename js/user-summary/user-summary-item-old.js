

// import html from '../html.js';
// import product from '../product-selector.js';

// class summaryRow {
//     constructor(product) {
//         this.name = name;
//         this.views = views;
//         this.clicks = clicks;
//     }

//     sayHello() {
//         return 'I am ' + this.name;
//     }
// }

// export default Pet;


// let template = function(product) {
//     let name = product.name;
//     let views = product.views;
//     let clicks = product.clicks;
//     let percentage = clicks % views * 100;

//     return html`
//         <section class="summaryTable">
//             <h2>
//                 Summary of Results
//             </h2>
//             <ul id="user-summary">
//                 <li>${name} had ${clicks} clicks out of ${views} views, equaling ${percentage} percent of selections.
//             </ul>
//         </section>
//     `;
// };
    // return html`
    //     <li>${name} had ${clicks} clicks out of ${views} views, equaling ${percentage} percent of selections.
    // `;


// export default class ProductReport {
//     constructor(product) {
//         this.product = product;
//     }

//     render() {
//         let dom = template(this.product);
//         return dom;
//     }
// }
//console.log(ProductReport);