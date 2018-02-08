const gallery = $('.gallery');
const players = {};
let canLoadYouTubeAPI = true;

gallery.each(function () {
    const curGallery = $(this);
    const sliderFor = curGallery.find('.slider-for');
    const sliderNav = curGallery.find('.slider-nav');

    if (curGallery.hasClass('gallery_video')) {

        if (canLoadYouTubeAPI) {
            var tag = document.createElement('script'),
                firstScriptTag = document.getElementsByTagName('script')[0];

            tag.src = "https://www.youtube.com/iframe_api";
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            canLoadYouTubeAPI = false;
        }

        window.onYouTubeIframeAPIReady = function() {
            initVideoSliders(sliderFor, sliderNav);
        }

    } else initSliders(sliderFor, sliderNav);
});

function initVideoSliders(sliderFor, sliderNav) {
    let lazyloadsFor = null;
    let lazyloadsNav = null;

    sliderFor.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if (!players[`youtube${nextSlide}`]) {
            setVideo(lazyloadsFor.eq(nextSlide));
        }
        players[`youtube${currentSlide}`].pauseVideo();
    });

    sliderFor.on('init', function(){
        lazyloadsFor = sliderFor.find('.slider-for__item');
        setVideo(lazyloadsFor.eq(0));
        console.log(players);
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

function initSliders(sliderFor, sliderNav) {
    let lazyloadsFor = null;
    let lazyloadsNav = null;

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

function setVideo(curElem) {
    let dataVideo = curElem.data('video'),
        i = curElem.index();
    console.log('elem');

    curElem.append(`<div id="youtube${i}"></div>`);

    players[`youtube${i}`] = new YT.Player(`youtube${i}`, {
        videoId: dataVideo,
        playerVars:
            {
                "rel": 0
            },
        events: {
            onReady: function () {
                curElem.addClass('loaded');
            }
        }
    });
}