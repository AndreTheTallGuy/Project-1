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
        $(".title6").text(response._embedded.events[5].dates.start.localDate)
    });


    // Hotels
    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://qtravel-qtravel.p.rapidapi.com/apis?query=chicago&qapikey=125371768e33eb299b923ed3ca28e71c",
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "qtravel-qtravel.p.rapidapi.com",
    //         "x-rapidapi-key": "161dfc0a21msh4ed0b35c9e22b38p157c85jsn53ebc8a10b20"
    //     }
    // }

    // $.ajax(settings).done(function (res) {
    //     console.log(res);
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

var city2 = city;
city2 = city2.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

for (i = 0; i < city2.length; i++) {
    if (city2[i] == " ") {
        console.log(city2.replace(/ /g, '%20'));
    }
    console.log(city2);
    var city3 = city2.replace(/ /g, '%20')
}
console.log(city3);

var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&format=json&exintro=&titles=" + city3 + "&piprop=original&format=json";
console.log(wikiUrl);
$.ajax({
    url: wikiUrl,
    format: "json",
    method: "GET"

}).then(function (response) {
    var num = Object.keys(response.query.pages)
    // console.log(num)
    // console.log(response.query.pages)
    $(".blurb").html(response.query.pages[num].extract);
    // console.log(response);
    $(".blurbimg").attr("src", response.query.pages[num].original.source);
})


var d = new Date();
var today = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();

queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=88ec15a371a789a350f0798f4a6bd272"

// ajax to pull data
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.main.temp);

    //fill in data to display
    var iconCode = response.weather[0].icon
    var iconURL = ("http://openweathermap.org/img/wn/" + iconCode + "@2x.png")

    $("#name").text(response.name + " " + today)
    $(".icon").attr('src', iconURL)
    console.log(iconURL)
    $("#temp").text("Temperature: " + ((response.main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
    $("#hum").text("Humidity: " + response.main.humidity)
    $("#wind").text("WindSpeed" + response.wind.speed)

});

    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&q=city%20of%20" + city

    // // Perfoming an AJAX GET request to our queryURL
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response.data)
    //     $(".photos").attr("src", response.data.image_url)


    // });
});
