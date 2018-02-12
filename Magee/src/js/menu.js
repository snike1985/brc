class Menu {

    constructor(obj) {
        this.obj = obj;
        this.items = this.obj.querySelectorAll('.menu__item');
        this.btn = document.getElementsByClassName('menu-btn')[0];
        this.scrollContainer = document.getElementsByTagName('html')[0];
        this.site = document.querySelector('.site');

        this.onEvents();
    }

    onEvents() {
        this.btn.addEventListener('click', () => {

            this.scrollContainer.classList.toggle('menu-active');

            return false;
        });

        this.obj.addEventListener("touchstart", (e) => e.preventDefault());
        this.obj.addEventListener("touchmove", (e) => e.preventDefault());

        this.btn.addEventListener("touchstart", (e) => e.stopPropagation());
        this.btn.addEventListener("touchmove", (e) => e.stopPropagation());

        [...this.items].forEach(elem => {
            elem.addEventListener("touchstart", (e) => {
                e.stopPropagation();
            });
        });

        [...this.items].forEach(elem => {
            elem.addEventListener("touchmove", (e) => {
                e.stopPropagation();
            });
        });
    }
}