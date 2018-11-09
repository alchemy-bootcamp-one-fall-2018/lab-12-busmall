import html from './html.js';

function makeTemplate() {
    return html`
        <table class="user-summary">
            <thead>
                <tr class="xxxxxxxxxx">
                    <td class="productName-cell">Product</td>
                    <td class="viewed-cell">Number of times viewed</td>
                    <td class="clicked-cell">Number of times selected</td>
                    // <td class="percentage-cell">Percentage of times shown that image was selected</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;
}

// function makeRow(user) {
//     return html`<tr>
//         <td>${userSummary.user.Name}</td>
//         <td>${userSummary.viewed}</td>
//         <td>${userSummary.clicked}</td>
//         <td>${userSummary.percentage}</td>
//     </tr>`;
// }

class UserSummary {
    constructor(user, onSelect) {
        this.user = user;
        this.onSelect = onSelect;
    }

    render() {
        const dom = makeTemplate(this.user);
        const listItem = dom.querySelector('li');
        const user = this.user;

        if(this.onSelect) {
            listItem.addEventListener('click', () => {
                this.onSelect(user);
            });
        }

        return dom;
    }
}

export default UserSummary;