let imagesArray = [];

const surveyApi = {
    saveProducts() {
        window.localStorage.setItem('products', JSON.stringify(imagesArray));
    },

    getAll(){
        return JSON.parse(window.localStorage.getItem('products'));
    },

    add(product){
        imagesArray.push(product);
    },
};

export default surveyApi;
