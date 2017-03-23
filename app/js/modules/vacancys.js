export default class Vacancys{

    constructor(data){
        this.data = data;
        this.insertToDOM();
    }
    getVacancy(key){
        return this.data.find(
            (el,index,arr) => {
                return el.key == key? true: false;
            }
        )
    }
    insertToDOM(){
        let indexs = {'Москва': 0,'Минск': 1, 'remote':2},
            lists = $('.vacancys__list');
            
        for(let index in this.data){
            let el = $(`
                <li class="vacancys__item">
                    <a href="#" class="vacancys__link" data-key="${this.data[index].key}">
                        <img src="pictures/face.png" alt="vacancy">
                        <span class="vacancys__job-title">${this.data[index].title}</span>
                    </a>
                </li>
            `);
            lists.eq(indexs[this.data[index].location]).append(el);
        }
    }
}