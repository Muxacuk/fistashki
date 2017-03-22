export default function slidersToggleInit(){
    let link = $('.offices__link'),
        city = link.find('.city'),
        sliderTitle = $('#cityName'),
        sliders = $('.offices__imgs-list'),
        nextCity;

    link.on('click', (event) => {
        nextCity = city.text() === 'МОСКОВСКИЙ'? 'МИНСКИЙ' : 'МОСКОВСКИЙ';
    
        sliderTitle.text(city.text().toLowerCase());
        city.text(nextCity);

        sliders.toggleClass('offices__imgs-list_active');
        
        event.preventDefault();
    })

}