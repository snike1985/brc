class Header {

    constructor(obj) {
        this.obj = obj;
        this.scrollContainer = document.getElementsByTagName('html')[0];
        this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        this.onEvents();
    }

    onEvents() {
        window.addEventListener('scroll', () => {

            if ( this.scrollContainer.className != 'menu-active' ) {
                const curScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

                if (curScroll > this.lastScrollTop){
                    this.obj.classList.add('hide');
                } else {
                    this.obj.classList.remove('hide');
                }

                this.lastScrollTop = curScroll;

                if ( curScroll > 0 ) {
                    this.obj.classList.add('header_fixed');
                } else {
                    this.obj.classList.remove('header_fixed');
                    this.obj.classList.remove('hide');
                }
            }

        });
    }
}
