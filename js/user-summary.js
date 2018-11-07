import html from './html.js';

function makeTemplate() {
    return html`
        <table class="user-summary">
            <thead>
                <tr class="">
                    <td class="productName-cell">Product</td>
                    <td class="displayed-cell">Number of times shown</td>
                    <td class="selected-cell">Number of times selected</td>
                    // <td class="percentage-cell">Percentage of times shown that image was selected</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;
}

class UserSummary {
    constructor(products, onSelect) {
        this.products = products;
        this.onSelect = onSelect;
        this.rows = [];
    }

    render() {
        const dom = makeTemplate();
        this.body = dom.querySelector('tbody');

        // this.products.forEach(products => { 
        //     const productsRow = new productsRow(products, selected => {
        //         this.onSelect(selected);
        //         this.rows.forEach(row => row.update(selected));
        //     });
        //     this.rows.push(productsRow);
        //     this.body.appendChild(productsRow.render());
        // });

        return dom;
    }
}

export default UserSummary;