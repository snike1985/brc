console.clear();
//= menu.js
//= header.js
// smooth-scroll.js
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
        const hero = document.querySelector('.hero');
        const moveElem = hero.querySelector('.hero__movie');

        window.addEventListener('scroll', (e) => {

            const wScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            let newposition = wScroll * 0.35,
                newpositionTitle = wScroll * 0.25,
                heightOfTitle = hero.offsetHeight - moveElem.offsetHeight - 100;
                moveElem.style.transform = 'translateY(' + newpositionTitle + 'px)';
            if(wScroll <= heightOfTitle && document.body.offsetHeight > 870) {

            }
        })
    },
    _parallaxImageBg() {
        const body = document.body;
        const moveElem = document.querySelectorAll('.image-container__bg');

        moveElem.forEach(function (curElem) {
            const curParent = curElem.parentElement;

            window.addEventListener('scroll', (e) => {

                const wScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                const c = curParent.getBoundingClientRect();
                const elemScrollTop = wScroll + c.top;
                
                curElem.style.opacity = (wScroll - body.clientHeight*0.5)/elemScrollTop;
            })
        });

    },
    _animation() {
        const body = document.body;
        const elems = document.querySelectorAll('.animation');
        
        elems.forEach(function (curElem) {

            window.addEventListener('scroll', (e) => {
                const wScroll = body.scrollTop + body.clientHeight;
                const c = curElem.getBoundingClientRect();
                const elemScrollTop = body.scrollTop + c.top;

                if (wScroll > elemScrollTop) {
                    curElem.classList.add('show');
                }
            })
        });
    },
    init() {
        this._header();
        this._menu();
        this._animation();
        this._parallaxHero();
        this._parallaxImageBg();
    }
}

base.init();
