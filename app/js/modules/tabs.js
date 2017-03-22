export default function tabsInit ($){
    let links = $('.vacancys__cat-titles-link'),
        tabs = $('.vacancys__cat-item');

    links.on('click', function (event){
        let pos = links.index(this),
            $this = $(this),
            active = $this.parent().siblings().find('.vacancys__cat-titles-link_active');
        
        active.removeClass('vacancys__cat-titles-link_active');
        $this.addClass('vacancys__cat-titles-link_active');

        tabs.removeClass('vacancys__cat-item_active');
        tabs.eq(pos).addClass('vacancys__cat-item_active');
        
        event.preventDefault();
    });
}