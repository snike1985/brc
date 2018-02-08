if (document.getElementsByClassName('video-gallery').length) {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var players = {}, activePlayerId;

    function onYouTubeIframeAPIReady() {
        $('.video-gallery').each( function(){
            new VideoSlider( $(this) );
        } );
    }

}

var VideoSlider = function (obj) {

    //private properties
    var _obj = obj,
        play =  $('.play'),
    pause = $('.pause');

    //private methods
    var _addEvents = function () {

            play.on({
                'click': function () {
                    let parent = $(this).parent(),
                        curIndex = parent.index();

                    players[`youtube${curIndex}`].playVideo();
                }
            });

            pause.on({
                'click': function () {
                    let parent = $(this).parent(),
                        curIndex = parent.index();

                    players[`youtube${curIndex}`].pauseVideo();
                }
            });

        },
        _addPopup = function () {

            if ( players[activePlayerId] ) {
                players[activePlayerId].pauseVideo();
            }

            // _popupSlider = new Swiper(_popup.find( '.swiper-container' ), {
            //     pagination: _popupPagination,
            //     nextButton: _popupNext,
            //     prevButton: _popupPrev,
            //     slidesPerView: 1,
            //     centeredSlides: true,
            //     paginationClickable: true,
            //     onSlideChangeStart: function() {
            //         if ( players[activePlayerId] ) {
            //             players[activePlayerId].pauseVideo();
            //         }
            //
            //         activePlayerId = $( '.preview-slider-popup .swiper-slide').eq(_popupSlider.activeIndex).find( 'iframe' ).attr( 'id' );
            //     }
            // });

            $('.slider-for__item').each(function (i) {
                let curElem = $(this),
                    dataVideo = curElem.data('video');

                curElem.append(`<div id="youtube${i}"></div>`);

                players['youtube' + i] = new YT.Player('youtube' + i, {
                    videoId: dataVideo,
                    playerVars:
                        {
                            "rel":0
                        }
                });
            });

            // _obj.find( '.perview-slider__item').each( function(i) {
            //     var curItem = $(this),
            //         curType = curItem.data('type'),
            //         curAttr = curItem.data('src');
            //
            //     curItem.attr('data-num', i);
            //
            //     if ( curType == 'video' ) {
            //
            //         curItem.addClass('perview-slider__item_video');
            //
            //         _popupSlider.appendSlide('<div class="swiper-slide swiper-slide_video" data-num="' + i + '"><div id="youtube' + i + '"></div></div>');
            //
            //         players['youtube' + i]=new YT.Player('youtube' + i, {
            //             videoId: curAttr,
            //             playerVars:
            //                 {
            //                     "rel":0
            //                 }
            //         });
            //
            //     } else {
            //         _popupSlider.appendSlide('<div class="swiper-slide" data-num="' + i + '"><img alt=""></div>')
            //
            //         var picWrap = _popup.find( '.swiper-slide:last-child' ),
            //             pic = picWrap.children();
            //
            //         pic.attr('src',curAttr);
            //     }
            //
            // } );

        },
        _init = function () {
            _addPopup();
            _addEvents();
            console.log(players);
        };

    //public properties

    //public methods


    _init();
};