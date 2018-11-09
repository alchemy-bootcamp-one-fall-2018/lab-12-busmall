let products = [];

function saveProducts(){
    localStorage.setItem('products', JSON.stringify(products));
}

const surveyApi = {
    add(product) {
        products.push(product);
        saveProducts();
    }
};

export default surveyApi;