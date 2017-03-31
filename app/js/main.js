import tabsInit from './modules/tabs';
import slidersToggleInit from './modules/slidersToggle';
import canvasDraw from './modules/canvas';
import popupInit from './modules/popup';
import Vacancys from './modules/vacancys';
import menuInit from './modules/main_menu';
import burgerInit from './modules/burger';

$(document).ready(function(){
    //bg-video init
    $('.title-block__background-video').bgVideo();

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });
    tabsInit($);
    slidersToggleInit();
    canvasDraw();
    menuInit();
    burgerInit();
});

new Promise((resolve) => {
        $.getJSON('./data/vacancys.json')
            .done(data => {
                let vacancys = new Vacancys(data);
                resolve(vacancys);
            })
            .catch(err => console.log(err.responseText));
}).then((vacancys)=>{
        popupInit(vacancys);
});