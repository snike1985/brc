console.clear();
//= menu.js
//= header.js
// weather.js


// $(document.body).on('scroll touchmove load', function(e) {
//     console.log('scrolled');
//     var newposition = ($(window).scrollTop() * 0.35),
//         newpositionTitle = ($(window).scrollTop() * 0.7),
//         backgroundposition = ($(window).scrollTop() * 0.25),
//         heightOfTitle = $('.hero').height() - $('.hero__title').height() - 100;
//
//     if ( $(window).scrollTop() <= heightOfTitle && $(window).width() > 870)  {
//         $('.hero__title').css('transform', 'translateY(' + newpositionTitle + '%)');
//         // $('header').css('background-position-y', backgroundposition + 'px');
//
//     }
// });


'use strict';
const base = {
    _header() {
        const header = document.querySelectorAll('.header');

        [...header].forEach(obj => new Header(obj));
    },
    _menu() {
        const menu = document.querySelectorAll('.menu');

        [...menu].forEach(obj => new Menu(obj));
    },
    _para() {
        const windowElement = document.body;
        const hero = document.querySelector('.hero');
        const title = hero.querySelector('.hero__title');


        windowElement.addEventListener('scroll', (e) => {

            const wScroll = windowElement.scrollTop;
            
            let newposition = wScroll * 0.35,
                newpositionTitle = wScroll * 0.7,
                heightOfTitle = hero.offsetHeight - title.offsetHeight - 100;

            if(wScroll <= heightOfTitle && document.body.offsetHeight > 870) {
                title.style.transform = 'translateY(' + newpositionTitle + '%)';

            } else {
                console.log('...else')
            }
        })
    },
    _parallax() {
        const timeline = new TimelineMax();
        const paralaxElem = document.getElementById('hero-title');

        timeline.to(paralaxElem, 1, {y: 100});

        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
            duration: '50%', // duration in px eg. 300, 0 = autoplay
            // duration: '100%', // resposive duration in %
            offset: 100, // offset trigger position by 100px
            triggerElement: '#hero', // what will trigger scene
            triggerHook: 0
        });
        // scene.setTween(timeline);
        scene.addIndicators({ name: 'Blah Bla Bla' });
        scene.setTween(timeline);
        // scene.setPin('.hero');
        scene.addTo(controller);
    },
    init() {
        this._header();
        this._menu();
        this._para();
        //this._parallax();
    }
}

base.init();
