
function makeTemplate() {
}

class Chosen {
    constructor() {
        this.surveyItems = document.querySelectorAll('.product');
        
        this.surveyItems.forEach(item => {
            item.addEventListener('click', () => {
                console.log('clicked image');
            });
        });
    }
}

export default Chosen;