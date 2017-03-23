export default function popupInit(vacancys){
    let popup = $('.popup'),
        body = popup.find('.popup__body'),
        close = popup.find('.popup__close, .popup__cover'),
        textContainer = popup.find('.popup__left'),
        form = popup.find('form'),
        triggers = $('.vacancys__link');

    close.on('click', (event) => {
        popup.fadeOut(500);
        event.preventDefault();
    });
    body.on('click', (event) => {
        event.stopPropagation();
    });
    triggers.on('click', function (event){
        let key = $(this).data('key'),
            vacancy = vacancys.getVacancy(key);
        
        textContainer.html(`<h2>${vacancy.title}</h2>${vacancy.html}`);
        form[0].elements.key.value = vacancy.key;
        popup.fadeIn(500);
        event.preventDefault();
    });
}