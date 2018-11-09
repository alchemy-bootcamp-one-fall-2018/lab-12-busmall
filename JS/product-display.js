// import html from './html.js';

// let template = function(name) {
//     return html`
//     <li class="product-display>
//     <h3>${name}</h3>
//     <li>
//     `;
// };

// export default class Product {
//     constructor(product, onSelect) {
//         this.product = product;
//         this.onSelect = onSelect;
//         console.log(product);
//     }

//     render() {
//         console.log('got here');
//         let dom = template(this.product.name);

//         let li = dom.querySelector('li');
//         li.addEventListener('click', () => {
//             this.onSelect(this.product);
//         });

//         return dom;
//     }

// }