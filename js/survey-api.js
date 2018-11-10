let products;

const surveyApi = {
    saveProducts(products){
        localStorage.setItem('products', JSON.stringify(products));
    },
    getAll() {
        const json = localStorage.getItem('products');
        if(json) {
            products = JSON.parse(json);
        }
        return products;
    }

};

export default surveyApi;