import tabsInit from './modules/tabs';
import slidersToggleInit from './modules/slidersToggle';
import canvasDraw from './modules/canvas';
import popupInit from './modules/popup';

$(document).ready(function(){
    //bg-video init
    $('.title-block__background-video').bgVideo();

    //carousel init
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });
    //tasb
    tabsInit($);
    slidersToggleInit();
    canvasDraw();
    popupInit();
});
