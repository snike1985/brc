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
    init() {
        this._header();
        this._menu();
    }
}

base.init();
