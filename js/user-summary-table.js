import html from '../html.js';

const tableBody = document.getElementById('products-body');

function makeRow(product) {
    return html`<tr>
        <td>${userSummary.productName}</td>
        <td>${userSummary.displayed}</td>
        <td>${userSummary.selected}</td>
    </tr>`;
}

const contactsTable = {
    init(contacts) {
        // array method???
        // contacts.forEach(function(contact) {
        //     const tr = makeRow(contact);
        //     tableBody.appendChild(tr);
        // });

        for(let i = 0; i < contacts.length; i++) {
            const tr = makeRow(contacts[i]);
            tableBody.appendChild(tr);
        }
    },
    update(contacts) {
        // remove all existing rows
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }

        // add new rows
        contactsTable.init(contacts);
    }
};

export default contactsTable;