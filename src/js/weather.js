// $(document).ready(function() {
//     $.simpleWeather({
//         location: 'Saratoga, WY',
//         woeid: '',
//         unit: 'f',
//         success: function(weather) {
//             let  html =
//                 `<span>
//                     <i class="icon-${weather.code}"></i>
//                     ${weather.temp}&deg;${weather.units.temp}
//                 </span>
//                 ${weather.city}, ${weather.region}`;
//
//             $('.weather').html(html);
//         },
//         error: function(error) {
//             $('.weather').html('<p>'+error+'</p>');
//         }
//     });
// });
