

const surveyApi = {
    saveProducts(products){
        localStorage.setItem('products', JSON.stringify(products));
    }
};

export default surveyApi;