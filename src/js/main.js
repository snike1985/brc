//= other.js
//= menu.js
//= header.js
//= weather.js

const base = {
    _header() {
        new Header('.header');
    },
    _menu() {
        const menu = document.querySelectorAll('.menu');

        menu.forEach((obj) => {
            new Menu(obj);
        });
    },
    _script() {
        console.log('...script is working');
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
        this._script();
        this._parallax();
    }
}

base.init();
