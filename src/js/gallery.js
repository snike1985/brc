// var galleryTop = new Swiper('.gallery-top', {
//     spaceBetween: 10,
//     lazy: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     on: {
//         slideChange: function () {
//             console.log(this.activeIndex);
//             galleryThumbs.slideTo(this.activeIndex);
//             console.log('thumb acIndex ', galleryThumbs.activeIndex);
//             $(elems).removeClass('active');
//             $(elems).eq(this.activeIndex).addClass('active');
//         }
//     }
// });
// var galleryThumbs = new Swiper('.gallery-thumbs', {
//     spaceBetween: 10,
//     slidesPerView: 6,
//     centeredSlides: true,
//     on: {
//         init: function () {
//             console.log('swiper initialized');
//         },
//         click: function (index) {
//                console.log('swiper click', $(index.target).data('id'));
//                galleryTop.slideTo($(index.target).data('id'));
//         },
//         tab: function (index) {
//             console.log('swiper click', index);
//         },
//     },
// });
//
// var elems = document.querySelectorAll('.gallery-thumbs .swiper-slide');
//
// elems.forEach((el) => {
//
//     el.addEventListener('click', () => {
//         console.log($(el).data('id'));
//         $(elems).removeClass('active');
//         el.classList.add('active');
//         galleryTop.slideTo($(el).data('id'));
//     });
//
// });
// //    galleryTop.controller.control = galleryThumbs;
// //    galleryThumbs.controller.control = galleryTop;

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});