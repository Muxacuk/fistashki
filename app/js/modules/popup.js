export default function popupInit(){
    let popup = $('.popup'),
        body = popup.find('.popup__body'),
        close = popup.find('.popup__close, .popup__cover'),
        triggers = $('.vacancys__link');

    close.on('click', (event) => {
        popup.fadeOut(500);
        event.preventDefault();
    });
    body.on('click', (event) => {
        event.stopPropagation();
    });
    triggers.on('click', function (event){
        popup.fadeIn(500);
        event.preventDefault();
    });
}