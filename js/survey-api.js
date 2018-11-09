let products = [];

function saveItems() {
    localStorage.setItem('products', JSON.stringify(products));
}

const surveyApi = {
    getAll() {
        return products;
    },

    add(product) {
        products.push(product);
        saveItems();
    }
};

export default surveyApi;