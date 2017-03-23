import tabsInit from './modules/tabs';
import slidersToggleInit from './modules/slidersToggle';
import canvasDraw from './modules/canvas';
import popupInit from './modules/popup';
import Vacancys from './modules/vacancys';

$(document).ready(function(){
    //bg-video init
    $('.title-block__background-video').bgVideo();

    //carousel init
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });
    tabsInit($);
    slidersToggleInit();
    canvasDraw();

    var vacancys;
    new Promise((resolve) => {
            $.getJSON('../data/vacancys.json')
                .done(data => {
                    vacancys = new Vacancys(data);
                    resolve(vacancys);
                })
                .catch(err => console.log(err));
    }).then((vacancys)=>{
            console.log(vacancys);
            popupInit(vacancys);
    });
});
