class Menu {

    constructor(obj) {
        this.obj = obj;
        this.btn = document.getElementsByClassName('menu-btn')[0];
        this.scrollContainer = document.getElementsByTagName('html')[0];

        this.onEvents();
    }

    onEvents() {
        this.btn.addEventListener('click', () => {
            this.scrollContainer.classList.toggle('menu-active');
            return false;
        });
    }
}