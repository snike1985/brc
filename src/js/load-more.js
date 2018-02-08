const btnMore = $('.blog-preview__more');
const list = $('.blog-preview__list');
let _canAddItem = true;
let _request = new XMLHttpRequest();
let curPage = 2;

btnMore.on({
    'click': function () {
        btnMore.addClass('loading');
        loadMore();
        return false;
    }
});

function loadMore() {

    _request.abort();
    _request = $.ajax({
        url: 'php/loadMore.php',
        data: {
            action : 'blog',
            page: curPage
        },
        dataType: 'json',
        type: 'get',
        success: function (msg) {
            
            addItems(msg.items);

            btnMore.removeClass('loading');

            if ( msg.more ) {
                curPage++;
            } else {
                btnMore.addClass('not-more');
            }
        },
        error: function (XMLHttpRequest) {
            if (XMLHttpRequest.statusText != "abort") {
                console.error(XMLHttpRequest.statusText);
            }
            btnMore.addClass('not-more');
        }
    });
};

function addItems( arr ) {

    for ( var i = 0; i < arr.length; i++ ) {
        list.append(
            `<div class="blog-preview__item animation">
                <a href="${arr[i].link}" class="blog-preview__pic">
                    <img src="${arr[i].src}" alt="">
                </a>
                <div class="blog-preview__description">
                    ${arr[i].itemDate}
                    <h2>${arr[i].name}</h2>
                    <p>${arr[i].text}</p>
                    <a href="${arr[i].link}" class="btn">read more</a>
                </div>
             </div>`
        );
    }

    setTimeout( function() {

        $( '.blog-preview__item').addClass( 'show' );

    }, 50 );

};