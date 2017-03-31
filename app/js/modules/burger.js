export default function() {
  const $burger = $('.fixed-burger');
  const $header = $('.header .header-inner');
  $(window).on('scroll', () => {
    const headerHeight = $header.height();
    if($(window).scrollTop() > headerHeight) {
      $burger.show();
    } else {
      $burger.hide();
    }
  }).scroll();
  $(window).on('resize', () => {
    const windowWidth = $(window).width(),
        headerWidth = $header.width();
    const right = (windowWidth - headerWidth)/2;

    $burger.css({right: right});
  }).resize();
}