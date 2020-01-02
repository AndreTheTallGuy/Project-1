$(".searchBtn").on("click", function (event) {
    event.preventDefault();

    var city = $("#search").val();
    console.log(city);

    var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + city + "&apikey=JX6oElzG2sVnqCHCJbZWC1s9ZPfEQLkl";

    $.ajax({
        url: ticketMasterURL,
        method: "GET"
    }).then(function (response) {
        console.log(response._embedded.events[0].dates.start.localDate);


        $(".content1").text(response._embedded.events[0].name)
        $(".img1").attr("src", response._embedded.events[0].images[0].url)
        $(".link1").attr("href", response._embedded.events[0].url)
        $(".link1").text("Buy Tickets")
        $(".title1").text(response._embedded.events[0].dates.start.localDate)

        $(".content2").text(response._embedded.events[1].name)
        $(".img2").attr("src", response._embedded.events[1].images[0].url)
        $(".link2").attr("href", response._embedded.events[1].url)
        $(".link2").text("Buy Tickets")
        $(".title2").text(response._embedded.events[2].dates.start.localDate)

        $(".content3").text(response._embedded.events[2].name)
        $(".img3").attr("src", response._embedded.events[2].images[0].url)
        $(".link3").attr("href", response._embedded.events[2].url)
        $(".link3").text("Buy Tickets")
        $(".title3").text(response._embedded.events[2].dates.start.localDate)

        $(".content4").text(response._embedded.events[3].name)
        $(".img4").attr("src", response._embedded.events[3].images[0].url)
        $(".link4").attr("href", response._embedded.events[3].url)
        $(".link4").text("Buy Tickets")
        $(".title4").text(response._embedded.events[3].dates.start.localDate)

        $(".content5").text(response._embedded.events[4].name)
        $(".img5").attr("src", response._embedded.events[4].images[0].url)
        $(".link5").attr("href", response._embedded.events[4].url)
        $(".link5").text("Buy Tickets")
        $(".title5").text(response._embedded.events[4].dates.start.localDate)

        $(".content6").text(response._embedded.events[5].name)
        $(".img6").attr("src", response._embedded.events[5].images[0].url)
        $(".link6").attr("href", response._embedded.events[5].url)
        $(".link6").text("Buy Tickets")
        $(".title6").text(response._embedded.events[5].dates.start.localDate.moment().format("MMM Do YY"))
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

    //Wikipedia login
    // var loginUrl = "https://www.mediawiki.org/w/api.php?action=login&lgname=Jsegel12@Project1&lgpassword=n8mqe7fg3ql50genu5iaskushljgicjf&lgtoken=123ABC";
    // $.ajax({
    //     url: loginUrl,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);
    // })
    // wiki query

    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=" + city + "&format=json";
    $.ajax({
        url: wikiUrl,
        format: "json",
        method: "GET"

    }).then(function(response){
        var num = Object.keys(response.query.pages)
        // console.log(num)
        // console.log(response.query.pages)
<<<<<<< HEAD
        $(".blurb").html(response.query.pages[num].extract);
=======
<<<<<<< HEAD
        $(".blurb").html(response.query.pages[num].extract);
=======
        console.log(response.query.pages[num].extract);

>>>>>>> ebb2c168c54b12cc9c1c5bc1eced17303ac3cb20
>>>>>>> master
        console.log(wikiUrl)
    })


});



