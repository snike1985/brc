//= other.js

const base = {
    _script() {
        console.log('...script is working');
    },
    init() {
        this._script();
    }
}
base.init();
