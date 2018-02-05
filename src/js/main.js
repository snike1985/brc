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
    _parallaxImageBg() {
        const windowElement = document.body;
        const hero = document.querySelectorAll('.image-container');
        const moveElem = document.querySelectorAll('.image-container__bg');

        moveElem.forEach(function (curElem) {
            const curParent = curElem.parentElement;

            windowElement.addEventListener('scroll', (e) => {

                const wScroll = windowElement.scrollTop - windowElement.clientHeight;
                const c = curParent.getBoundingClientRect();
                const elemScrollTop = windowElement.scrollTop + c.top;
                let newposition = elemScrollTop + windowElement.clientHeight - windowElement.scrollTop;

                // curElem.style.transform = 'translateY(' + newposition + 'px)';
                curElem.style.opacity = (windowElement.scrollTop - windowElement.clientHeight*0.75)/elemScrollTop;
            })
        });

    },
    _animation() {
        const windowElement = document.body;
        const elems = document.querySelectorAll('.animation');
        
        elems.forEach(function (curElem) {

            windowElement.addEventListener('scroll', (e) => {

                const wScroll = windowElement.scrollTop + windowElement.clientHeight;
                const c = curElem.getBoundingClientRect();
                const elemScrollTop = windowElement.scrollTop + c.top;
                
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
