console.clear();
//= menu.js
//= header.js
//= smooth-scroll.js
//= weather.js


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
    _parallaxHero() {
        const windowElement = document.body;
        const hero = document.querySelector('.hero');
        const moveElem = hero.querySelector('.hero__movie');

        windowElement.addEventListener('scroll', (e) => {

            const wScroll = windowElement.scrollTop;

            let newposition = wScroll * 0.35,
                newpositionTitle = wScroll * 0.25,
                heightOfTitle = hero.offsetHeight - moveElem.offsetHeight - 100;
                moveElem.style.transform = 'translateY(' + newpositionTitle + 'px)';
            if(wScroll <= heightOfTitle && document.body.offsetHeight > 870) {

            }
        })
    },
    _animation() {
        const windowElement = document.body;
        const elems = document.querySelectorAll('.animation');
        
        elems.forEach(function (curElem) {

            windowElement.addEventListener('scroll', (e) => {
                
                const wScroll = windowElement.scrollTop - windowElement.clientHeight*1.5;
                const elemScrollTop = $(curElem).offset().top;
                
                if (wScroll > elemScrollTop) {
                    curElem.classList.add('show');
                }
            })
        });
    },
    _parallax() {
        const timeline = new TimelineMax();
        const hero = document.querySelector('.hero');
        const image = hero.querySelector('img');

        timeline.to(image, 1, {y: 100});

        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
            duration: '50%', // duration in px eg. 300, 0 = autoplay
            // duration: '100%', // resposive duration in %
            offset: 100, // offset trigger position by 100px
            triggerElement: hero, // what will trigger scene
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
        this._animation();
        this._parallaxHero();
        // this._parallax();
    }
}

base.init();
