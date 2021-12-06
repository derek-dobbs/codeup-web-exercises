$(document).ready(function () {
    "use strict";

    let mapLat = 29.674525;
    let mapLon = -97.959844;
    let location;

    mapboxgl.accessToken = MAPBOX_KEY;
    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [mapLon, mapLat], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });

    map.addControl(new mapboxgl.NavigationControl());

    reverseGeocode({lat: mapLat, lng: mapLon}, MAPBOX_KEY).then(function(results) {
        location = results.features[2].place_name;
        $('#current-city').html(location);
    });

    let marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([mapLon, mapLat])
        .addTo(map);

    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: mapLat,
        lon: mapLon,
        exclude: "minutely,hourly",
        units: "imperial",
        APPID: OPEN_WEATHER_KEY
    }).done(function (data) {
        $('#current-temperature').html(parseInt(data.current.temp) + "&#176");
        $('#current-description').html(data.current.weather[0].description);
        $('#current-feels-like').html("<em>Feels like</em>: " + parseInt(data.current.feels_like) + "&#176");
        $('#wind-speed').html("Wind Speed: " + parseInt(data.current.wind_speed));

        $('#current-icon').attr("src", "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png");

        $('#day0').html(new Date(data.daily[0].dt * 1000));
        $('#day1').html(new Date(data.daily[1].dt * 1000));
        $('#day2').html(new Date(data.daily[2].dt * 1000));
        $('#day3').html(new Date(data.daily[3].dt * 1000));
        $('#day4').html(new Date(data.daily[4].dt * 1000));

        $('#day0-low').html("Low " + parseInt(data.daily[0].temp.min) + "&#176");
        $('#day0-high').html("High " + parseInt(data.daily[0].temp.max) + "&#176");

        $('#day1-low').html("Low " + parseInt(data.daily[1].temp.min) + "&#176");
        $('#day1-high').html("High " + parseInt(data.daily[1].temp.max) + "&#176");

        $('#day2-low').html("Low " + parseInt(data.daily[2].temp.min) + "&#176");
        $('#day2-high').html("High " + parseInt(data.daily[2].temp.max) + "&#176");

        $('#day3-low').html("Low " + parseInt(data.daily[3].temp.min) + "&#176");
        $('#day3-high').html("High " + parseInt(data.daily[3].temp.max) + "&#176");

        $('#day4-low').html("Low " + parseInt(data.daily[4].temp.min) + "&#176");
        $('#day4-high').html("High " + parseInt(data.daily[4].temp.max) + "&#176");


        $("#day0-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");
        $("#day1-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png");
        $("#day2-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png");
        $("#day3-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png");
        $("#day4-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png");

        $('#day0-description').html(data.daily[0].weather[0].description);
        $('#day1-description').html(data.daily[1].weather[0].description);
        $('#day2-description').html(data.daily[2].weather[0].description);
        $('#day3-description').html(data.daily[3].weather[0].description);
        $('#day4-description').html(data.daily[4].weather[0].description);

        $('#day0-humidity').html(parseInt(data.daily[0].humidity));
        $('#day1-humidity').html(parseInt(data.daily[1].humidity));
        $('#day2-humidity').html(parseInt(data.daily[2].humidity));
        $('#day3-humidity').html(parseInt(data.daily[3].humidity));
        $('#day4-humidity').html(parseInt(data.daily[4].humidity));

        $('#day0-wind').html(parseFloat(data.daily[0].wind_speed));
        $('#day1-wind').html(parseFloat(data.daily[1].wind_speed));
        $('#day2-wind').html(parseFloat(data.daily[2].wind_speed));
        $('#day3-wind').html(parseFloat(data.daily[3].wind_speed));
        $('#day4-wind').html(parseFloat(data.daily[4].wind_speed));

        $('#day0-pressure').html(parseInt(data.daily[0].pressure));
        $('#day1-pressure').html(parseInt(data.daily[1].pressure));
        $('#day2-pressure').html(parseInt(data.daily[2].pressure));
        $('#day3-pressure').html(parseInt(data.daily[3].pressure));
        $('#day4-pressure').html(parseInt(data.daily[4].pressure));

        $('#change-location-link').click(function () {
            $('#location-prompt').removeClass('visibility-hidden')
        });

        marker.on('dragend', function () {
            const lngLat = marker.getLngLat();

            mapLat = lngLat.lat;
            mapLon = lngLat.lng;
            console.log(mapLat);
            console.log(mapLon);

            map.flyTo({
                center: [mapLon, mapLat],
                zoom: 10,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });

            $.get('https://api.openweathermap.org/data/2.5/onecall', {
                lat: mapLat,
                lon: mapLon,
                exclude: "minutely,hourly",
                units: "imperial",
                APPID: OPEN_WEATHER_KEY
            }).done(function (data) {
                // alert("Loaded");
                reverseGeocode({lat: mapLat, lng: mapLon}, MAPBOX_KEY).then(function(results) {
                    location = results.features[2].place_name;
                    $('#current-city').html(location);
                    // console.log(location);
                });

                $('#current-temperature').html(parseInt(data.current.temp) + "&#176");
                $('#current-description').html(data.current.weather[0].description);
                $('#current-feels-like').html("<em>Feels like</em>: " + parseInt(data.current.feels_like) + "&#176");
                $('#wind-speed').html("Wind Speed: " + parseInt(data.current.wind_speed));

                $('#current-icon').attr("src", "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png");

                $('#day0').html(new Date(data.daily[0].dt * 1000));
                $('#day1').html(new Date(data.daily[1].dt * 1000));
                $('#day2').html(new Date(data.daily[2].dt * 1000));
                $('#day3').html(new Date(data.daily[3].dt * 1000));
                $('#day4').html(new Date(data.daily[4].dt * 1000));

                $('#day0-low').html("Low " + parseInt(data.daily[0].temp.min) + "&#176");
                $('#day0-high').html("High " + parseInt(data.daily[0].temp.max) + "&#176");

                $('#day1-low').html("Low " + parseInt(data.daily[1].temp.min) + "&#176");
                $('#day1-high').html("High " + parseInt(data.daily[1].temp.max) + "&#176");

                $('#day2-low').html("Low " + parseInt(data.daily[2].temp.min) + "&#176");
                $('#day2-high').html("High " + parseInt(data.daily[2].temp.max) + "&#176");

                $('#day3-low').html("Low " + parseInt(data.daily[3].temp.min) + "&#176");
                $('#day3-high').html("High " + parseInt(data.daily[3].temp.max) + "&#176");

                $('#day4-low').html("Low " + parseInt(data.daily[4].temp.min) + "&#176");
                $('#day4-high').html("High " + parseInt(data.daily[4].temp.max) + "&#176");

                $("#day0-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");
                $("#day1-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png");
                $("#day2-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png");
                $("#day3-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png");
                $("#day4-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png");

                $('#day0-description').html(data.daily[0].weather[0].description);
                $('#day1-description').html(data.daily[1].weather[0].description);
                $('#day2-description').html(data.daily[2].weather[0].description);
                $('#day3-description').html(data.daily[3].weather[0].description);
                $('#day4-description').html(data.daily[4].weather[0].description);

                $('#day0-humidity').html(parseInt(data.daily[0].humidity));
                $('#day1-humidity').html(parseInt(data.daily[1].humidity));
                $('#day2-humidity').html(parseInt(data.daily[2].humidity));
                $('#day3-humidity').html(parseInt(data.daily[3].humidity));
                $('#day4-humidity').html(parseInt(data.daily[4].humidity));

                $('#day0-wind').html(parseFloat(data.daily[0].wind_speed));
                $('#day1-wind').html(parseFloat(data.daily[1].wind_speed));
                $('#day2-wind').html(parseFloat(data.daily[2].wind_speed));
                $('#day3-wind').html(parseFloat(data.daily[3].wind_speed));
                $('#day4-wind').html(parseFloat(data.daily[4].wind_speed));

                $('#day0-pressure').html(parseInt(data.daily[0].pressure));
                $('#day1-pressure').html(parseInt(data.daily[1].pressure));
                $('#day2-pressure').html(parseInt(data.daily[2].pressure));
                $('#day3-pressure').html(parseInt(data.daily[3].pressure));
                $('#day4-pressure').html(parseInt(data.daily[4].pressure));
            });
        });

        $('#search-button').click(function (event) {
            event.preventDefault();
            $('#location-prompt').addClass('visibility-hidden');
            geocode($('#location-search').val(), MAPBOX_KEY).then(function(results) {
                mapLon = results[0];
                mapLat = results[1];

                map.flyTo({
                    center: [mapLon, mapLat],
                    zoom: 10,
                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                });

                marker.remove();
                marker.setLngLat([mapLon, mapLat]).addTo(map);

                $.get('https://api.openweathermap.org/data/2.5/onecall', {
                    lat: mapLat,
                    lon: mapLon,
                    exclude: "minutely,hourly",
                    units: "imperial",
                    APPID: OPEN_WEATHER_KEY
                }).done(function (data) {
                    reverseGeocode({lat: mapLat, lng: mapLon}, MAPBOX_KEY).then(function(results) {
                        location = results.features[2].place_name;
                        $('#current-city').html(location);
                    });

                    $('#current-temperature').html(parseInt(data.current.temp) + "&#176");
                    $('#current-description').html(data.current.weather[0].description);
                    $('#current-feels-like').html("<em>Feels like</em>: " + parseInt(data.current.feels_like) + "&#176");
                    $('#wind-speed').html("Wind Speed: " + parseInt(data.current.wind_speed));

                    $('#current-icon').attr("src", "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png");

                    $('#day0').html(new Date(data.daily[0].dt * 1000));
                    $('#day1').html(new Date(data.daily[1].dt * 1000));
                    $('#day2').html(new Date(data.daily[2].dt * 1000));
                    $('#day3').html(new Date(data.daily[3].dt * 1000));
                    $('#day4').html(new Date(data.daily[4].dt * 1000));

                    $('#day0-low').html("Low " + parseInt(data.daily[0].temp.min) + "&#176");
                    $('#day0-high').html("High " + parseInt(data.daily[0].temp.max) + "&#176");

                    $('#day1-low').html("Low " + parseInt(data.daily[1].temp.min) + "&#176");
                    $('#day1-high').html("High " + parseInt(data.daily[1].temp.max) + "&#176");

                    $('#day2-low').html("Low " + parseInt(data.daily[2].temp.min) + "&#176");
                    $('#day2-high').html("High " + parseInt(data.daily[2].temp.max) + "&#176");

                    $('#day3-low').html("Low " + parseInt(data.daily[3].temp.min) + "&#176");
                    $('#day3-high').html("High " + parseInt(data.daily[3].temp.max) + "&#176");

                    $('#day4-low').html("Low " + parseInt(data.daily[4].temp.min) + "&#176");
                    $('#day4-high').html("High " + parseInt(data.daily[4].temp.max) + "&#176");

                    $("#day0-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");
                    $("#day1-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png");
                    $("#day2-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png");
                    $("#day3-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png");
                    $("#day4-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png");

                    $('#day0-description').html(data.daily[0].weather[0].description);
                    $('#day1-description').html(data.daily[1].weather[0].description);
                    $('#day2-description').html(data.daily[2].weather[0].description);
                    $('#day3-description').html(data.daily[3].weather[0].description);
                    $('#day4-description').html(data.daily[4].weather[0].description);

                    $('#day0-humidity').html(parseInt(data.daily[0].humidity));
                    $('#day1-humidity').html(parseInt(data.daily[1].humidity));
                    $('#day2-humidity').html(parseInt(data.daily[2].humidity));
                    $('#day3-humidity').html(parseInt(data.daily[3].humidity));
                    $('#day4-humidity').html(parseInt(data.daily[4].humidity));

                    $('#day0-wind').html(parseFloat(data.daily[0].wind_speed));
                    $('#day1-wind').html(parseFloat(data.daily[1].wind_speed));
                    $('#day2-wind').html(parseFloat(data.daily[2].wind_speed));
                    $('#day3-wind').html(parseFloat(data.daily[3].wind_speed));
                    $('#day4-wind').html(parseFloat(data.daily[4].wind_speed));

                    $('#day0-pressure').html(parseInt(data.daily[0].pressure));
                    $('#day1-pressure').html(parseInt(data.daily[1].pressure));
                    $('#day2-pressure').html(parseInt(data.daily[2].pressure));
                    $('#day3-pressure').html(parseInt(data.daily[3].pressure));
                    $('#day4-pressure').html(parseInt(data.daily[4].pressure));
                });
            });
        });
    });
});