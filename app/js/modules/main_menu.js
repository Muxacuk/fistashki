export default function(){
  const $openBtn = $('.open-main-menu'),
    $closeBtn = $('.main-menu-close'),
    $popup = $('.main-menu');
  $openBtn.on('click', e => {
    e.preventDefault();
    $popup.addClass('open');
    $('body').addClass('popup-open');
  });

  $closeBtn.on('click', e => {
    e.preventDefault();
    $popup.removeClass('open');
    $('body').removeClass('popup-open');
  });

  $('.main-menu-content a').on('click', () => {
    $closeBtn.click();
  });
}
