console.clear();
//= menu.js
//= header.js
//= smooth-scroll.js
//= weather.js
//= gallery.js
//= load-more.js


'use strict';
const base = {
    _header() {
        const header = document.querySelectorAll('.header');

        if (header) [...header].forEach(obj => new Header(obj));

    },
    _menu() {
        const menu = document.querySelectorAll('.menu');

        if (menu) [...menu].forEach(obj => new Menu(obj));
    },
    _parallaxHero() {
        const hero = document.querySelector('.hero');

        if (hero) {
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
        }
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

            window.addEventListener('load', () => {
                const wScroll = body.scrollTop + body.clientHeight;
                const c = curElem.getBoundingClientRect();
                const elemScrollTop = body.scrollTop + c.top;

                if (wScroll > elemScrollTop) {
                    curElem.classList.add('show');
                }
            })
        });

    },
    _slider(){
        const sliders = document.querySelectorAll('[data-template="slider"]');

        [...sliders].forEach(slider => {
            const sliderInit = slider.firstElementChild;
            const mySwiper = new Swiper(sliderInit, {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                speed: 600
            })
        })
    },
    _loader(){
        const loader = document.querySelector('.loader');

        if (loader) window.addEventListener('load', () => loader.classList.add('hide'));
    },
    _windowHandler(){
        window.addEventListener('resize', () => {
            this._flexibleText()
        })
    },
    _flexibleText() {
		console.log('...flexible text inited')
		const text_block = document.querySelectorAll('[data-component="flex"]');

		//Common function to get all of the necessary CSS properties
		let _getCSS = (element, property) => {
			return Math.round(parseFloat(window.getComputedStyle(element, null).getPropertyValue(property)));
		}

		//Const to limit the lower value of font pixel size. It stays still readable in any cases.
		const SIZE_MIN_LIMITATION = 10;

		if(text_block) {

			[...text_block].forEach(item => {

				const inner = item.querySelector('*');
                console.log(inner);
				inner.style.display = "inline-block";

				let currentFontSize = _getCSS(inner, 'font-size');

				const SIZE_MAX_LIMITATION = (data = 'data-size') => {
					inner.style.removeProperty('font-size');
					inner.setAttribute(data, _getCSS(inner, 'font-size'));
					return inner.getAttribute(data);
				}

				//Copy will try be one line, if the block will be able to contain the element of copy with SIZE_MIN_LIMITATION
				if(item.classList.contains('single')){
					inner.style.lineHeight = '2.5';//_getCSS(item, 'height')/2 + 'px';
				}

				//Fallback on resize
				while (_getCSS(item, 'height') > _getCSS(inner, 'height')) {
					if (currentFontSize == SIZE_MAX_LIMITATION()) return;
					inner.style.fontSize = ++currentFontSize + 'px';
				}

				while (_getCSS(item, 'height') < _getCSS(inner, 'height')) {

					//Don't need our copy to be too small
					if (currentFontSize < SIZE_MIN_LIMITATION) {
						inner.style.fontSize = currentFontSize + 'px';
						inner.style.lineHeight = '1.25';
						return;
					};
					inner.style.fontSize = --currentFontSize + 'px';
				}
			})
		}
	},
    _heroAnimation() {
        var timeline = new TimelineMax({
            onComplete:()=> {
                $('.hero-main').addClass('complete');
            },
            onUpdate: ()=> {
                if ($('.hero-main').hasClass('complete')) $('.hero-main').removeClass('complete');

            }
        });

        timeline.to('.hero-main__people', 1, {scale: 1.7})
            .to('.hero-main__left', 1, {scale: 1.5}, 0)
            .to('.hero-main__center', 1, {scale: 1.3}, 0)
            .to('.hero-main__center-mountain', 1, {scale: 1.1}, 0)
            .to('.hero-main', 1, {autoAlpha: 0}, .5);

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            duration: '100%', // duration in px eg. 300, 0 = autoplay
            // duration: '100%', // resposive duration in %
            offset: 0, // offset trigger position by 100px
            // triggerElement: '.trigger', // what will trigger scene
            triggerHook: 0
        });
        // scene.addIndicators({ name: 'Hero animation' });
        scene.setTween(timeline);
        scene.setPin('.hero-main');
        scene.addTo(controller);
    },
    _tmp() {
        this.background = skylake.Geb.id("background"),
            this.center = skylake.Geb.id("left_mountain"),
            this.foreground = skylake.Geb.id("man"),
            this.title = skylake.Geb.id("h-header-title"),
            this.line = skylake.Geb.id("h-header-line"),
            this.scrollLine = skylake.Geb.id("h-header-scroll-line"),
            this.scrollTxt = skylake.Geb.id("h-header-scroll-txt"),
            this.tlImg = new skylake.Timeline,
            this.tlImg.from(this.foreground, "scale", 1.5, 1, 2e3, "ExpoOut"),
            this.tlImg.from(this.center, "scale", 1.2, 1, 2e3, "ExpoOut"),
            this.tlImg.from(this.background, "3dy", 10, 0, 2e3, "ExpoOut"),
            this.tlImg.from(this.scrollLine, "3dy", 100, 0, 2e3, "ExpoOut"),
            this.tlImg.from(this.scrollTxt, "3dy", -100, 0, 2e3, "ExpoOut"),
            this.tlTxt = new skylake.Timeline,
            this.tlTxt.from(this.title, "3dy", 100, 0, 2e3, "ExpoOut", {delay: 300}),
            this.tlTxt.from(this.line, "3dx", -101, 0, 2e3, "ExpoOut")
    },
    init() {
        this._windowHandler();
        this._loader();
        this._slider();
        this._header();
        this._menu();
        this._animation();
        this._parallaxHero();
        this._parallaxImageBg();
        this._flexibleText();
        this._heroAnimation();
    }
}

base.init();
