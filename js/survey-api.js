let products = [];

function saveItems() {
    localStorage.setItem('products', JSON.stringify(products));
}

const surveyApi = {
    add(product) {
        products.push(product);
        saveItems();
    },
    getAll() {
        return products;
    }
    
};

export default surveyApi;