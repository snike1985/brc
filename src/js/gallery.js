const gallery = $('.gallery');
const sliderFor = gallery.find('.slider-for');
const sliderNav = gallery.find('.slider-nav');
let lazyloadsFor = null;
let lazyloadsNav = null;

function initSliders() {

    sliderFor.on('afterChange', function(){
        setBackground(lazyloadsFor);

    });

    sliderFor.on('init', function(){
        lazyloadsFor = sliderFor.find('.lazyload');
        setBackground(lazyloadsFor);
    });

    sliderNav.on('afterChange', function(){
        setBackground(lazyloadsNav);

    });

    sliderNav.on('init', function(){
        lazyloadsNav = sliderNav.find('.lazyload');
        setBackground(lazyloadsNav);
    });

    sliderFor.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav'
    });

    sliderNav.slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        focusOnSelect: true,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
}

function setBackground(elems) {
    elems.each(function () {
        const curElem = $(this);
        const dataSrc = curElem.data('src');

        if (curElem.hasClass('slick-active') && !curElem.hasClass('loaded')) {

            curElem.addClass('loaded');

            curElem.css({
                'background-image': `url(${dataSrc})`
            });
        }
    });
}

initSliders();