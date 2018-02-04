console.clear();
//= menu.js
//= header.js
// weather.js

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
        console.log('...scroll event inited');
        const hero = document.querySelector('.hero');
        const title = hero.querySelector('.hero__title');

        window.addEventListener('scroll', (e) => {
            console.log('...scrolled');
            // const wScroll = window.scrollTop;
            // let newposition = (wScroll * 0.35),
            //     newpositionTitle = (wScroll * 0.7),
            //     heightOfTitle = hero.innerHeight - title.innerHeight - 100;
            //
            // if(window.scrollTop <= heightOfTitle && window.innerWidth > 870) {
            //     title.style.transform = 'translateY(' + newpositionTitle + '%)';
            // }
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
