import DisplayImage from './image-display.js';
import UserSummary from './user-summary.js';
import surveyApi from './survey-api.js';

let count = 0;


function makeTemplate() {
    DisplayImage.render();
}

const Chosen = {
    init() {
        this.products = surveyApi.getDisProds();
        this.products = this.products.map(image => {
            if(!image.clicks) {
                image.clicks = 0;
            }
            return image;
        });
        surveyApi.storeDisProd(this.products);

        this.session = surveyApi.getSession();
    
        this.session = this.session.map(survey => {
            survey.clicks = 0;
            return survey;
        });

        surveyApi.storeSession(this.session);
    },
    
    render() {
        this.surveyItems = document.querySelectorAll('.product');  
        this.products = surveyApi.getDisProds();
        this.session = surveyApi.getSession();

        this.surveyItems.forEach(item => {
            item.addEventListener('click', event => {
                count++;
                this.index = this.products.findIndex(product => {
                    return product.name === event.target.name;
                });

                this.products[this.index].clicks = this.products[this.index].clicks + 1;
                this.session[this.index].clicks++;
                surveyApi.storeSession(this.session);

                surveyApi.storeDisProd(this.products);
                if(count > 3){
                    let summary = new UserSummary();
                    summary.render(true);
                } else {
                    makeTemplate();
                }
            });
        });

    }
};

export default Chosen;