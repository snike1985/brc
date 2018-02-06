$(document).ready(function() {
    const weatherElem = document.querySelectorAll('.weather');

    [...weatherElem].forEach(elem => {
        const curElem = $(elem);
        const location = curElem.data('location');

        $.simpleWeather({
            location: location,
            woeid: '',
            unit: 'c',
            success: function(weather) {
                let  html =
                    `<span><i class="icon-${weather.code}"></i>${weather.temp}&deg;</span>
                    ${weather.city}, ${weather.region}`;

                curElem.html(html);
            },
            error: function(error) {
                curElem.html('<p>'+error+'</p>');
            }
        });
    });
});
