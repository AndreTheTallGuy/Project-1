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

    });

    // Hotels
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

    //Wikipedia
    var queryUrl = "https://www.mediawiki.org/w/api.php?action=login&lgname=Jsegel12@Project1&lgpassword=n8mqe7fg3ql50genu5iaskushljgicjf&lgtoken=123ABC";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })


});



