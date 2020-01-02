$(".searchBtn").on("click", function (event) {
    event.preventDefault();

    var city = $("#search").val();
    console.log(city);

    var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + city + "&apikey=JX6oElzG2sVnqCHCJbZWC1s9ZPfEQLkl";

    $.ajax({
        url: ticketMasterURL,
        method: "GET"
    }).then(function (response) {
        console.log(response._embedded.events);

        var hotelURL = "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=" + city

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": hotelURL,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hotels4.p.rapidapi.com",
                "x-rapidapi-key": "161dfc0a21msh4ed0b35c9e22b38p157c85jsn53ebc8a10b20"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

});

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://fizplaces-fiz-places-v1.p.rapidapi.com/content/api/v2/list/mastertypes/",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "fizplaces-fiz-places-v1.p.rapidapi.com",
//         "x-rapidapi-key": "161dfc0a21msh4ed0b35c9e22b38p157c85jsn53ebc8a10b20",
//         "fizapikey": "19120b85-e5f7-4a4b-934c-1ba01d8bedc9"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });
