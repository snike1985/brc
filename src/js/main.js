//= other.js
//= menu.js
//= header.js
//= weather.js

const base = {
    _header() {
        const header = document.querySelectorAll('.header');

        header.forEach((obj) => {
            new Header(obj);
        });
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
    init() {
        this._header();
        this._menu();
        this._script();
    }
}

base.init();
