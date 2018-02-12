$(function(){
	var _window = $(window),
		scrollTime = 0.5,
		scrollDistance = 200;

    _window.on("mousewheel DOMMouseScroll", function(event){
        event.preventDefault();

        if ( !$('.menu-active').length) {
            var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3,
                scrollTop = _window.scrollTop(),
                finalScroll = scrollTop - parseInt( delta * scrollDistance );

            TweenMax.to( _window, scrollTime, {
                scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
            });
        }
	});
});
