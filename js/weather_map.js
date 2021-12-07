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
        console.log(data);
        $('#current-temperature').html(parseInt(data.current.temp) + "&#176");
        $('#current-description').html(data.current.weather[0].description);
        $('#current-feels-like').html("<em>Feels like</em>: " + parseInt(data.current.feels_like) + "&#176");
        $('#wind-speed').html("Wind Speed: " + parseInt(data.current.wind_speed));

        $('#current-icon').attr("src", "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png");

        // let dayOfWeek = new Date(data.daily[0].dt * 1000).getDay();
        // let month = new Date(data.daily[0].dt * 1000).getMonth();
        // let day = new Date(data.daily[0].dt * 1000).getDate();
        // let year = new Date(data.daily[0].dt * 1000).getFullYear();
        //
        // switch (dayOfWeek) {
        //     case 0:
        //         dayOfWeek = "Sun";
        //         break;
        //     case 1:
        //         dayOfWeek = "Mon";
        //         break;
        //     case 2:
        //         dayOfWeek = "Tue";
        //         break;
        //     case 3:
        //         dayOfWeek = "Wed";
        //         break;
        //     case 4:
        //         dayOfWeek = "Thu";
        //         break;
        //     case 5:
        //         dayOfWeek = "Fri";
        //         break;
        //     case 6:
        //         dayOfWeek = "Sat";
        //         break;
        // }
        //
        // switch (month) {
        //     case 0:
        //         month = "Jan";
        //         break;
        //     case 1:
        //         month = "Feb";
        //         break;
        //     case 2:
        //         month = "Mar";
        //         break;
        //     case 3:
        //         month = "Apr";
        //         break;
        //     case 4:
        //         month = "May";
        //         break;
        //     case 5:
        //         month = "Jun";
        //         break;
        //     case 6:
        //         month = "Jul";
        //         break;
        //     case 7:
        //         month = "Aug";
        //         break;
        //     case 8:
        //         month = "Sep";
        //         break;
        //     case 9:
        //         month = "Oct";
        //         break;
        //     case 10:
        //         month = "Nov";
        //         break;
        //     case 11:
        //         month = "Dec";
        //         break;
        //
        // }
        //
        // let date = dayOfWeek + " " + month + " " + day + ", " + year;
        //
        // console.log(date);

        for (let i = 0; i < 6; i++) {
            $('#day' + i).html(new Date(data.daily[i].dt * 1000));
            $('#day' + i + '-low').html("Low " + parseInt(data.daily[i].temp.min) + "&#176");
            $('#day' + i + "-high").html("High " + parseInt(data.daily[i].temp.max) + "&#176");
            $('#day' + i + "-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png");
            $('#day' + i + "-description").html(data.daily[i].weather[0].description);
            $('#day' + i + "-humidity").html(parseInt(data.daily[i].humidity));
            $('#day' + i + "-wind").html(parseFloat(data.daily[i].wind_speed));
            $('#day' + i + "-pressure").html(parseInt(data.daily[i].pressure));
        }

        $('#change-location-link').click(function () {
            $('#location-prompt').toggleClass('visibility-hidden')
        });

        marker.on('dragend', function () {
            let lngLat = marker.getLngLat();

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

                for (let i = 0; i < 6; i++) {
                    $('#day' + i).html(new Date(data.daily[i].dt * 1000));
                    $('#day' + i + '-low').html("Low " + parseInt(data.daily[i].temp.min) + "&#176");
                    $('#day' + i + "-high").html("High " + parseInt(data.daily[i].temp.max) + "&#176");
                    $('#day' + i + "-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png");
                    $('#day' + i + "-description").html(data.daily[i].weather[0].description);
                    $('#day' + i + "-humidity").html(parseInt(data.daily[i].humidity));
                    $('#day' + i + "-wind").html(parseFloat(data.daily[i].wind_speed));
                    $('#day' + i + "-pressure").html(parseInt(data.daily[i].pressure));
                }
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

                    for (let i = 0; i < 6; i++) {
                        $('#day' + i).html(new Date(data.daily[i].dt * 1000));
                        $('#day' + i + '-low').html("Low " + parseInt(data.daily[i].temp.min) + "&#176");
                        $('#day' + i + "-high").html("High " + parseInt(data.daily[i].temp.max) + "&#176");
                        $('#day' + i + "-icon").attr("src", "http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png");
                        $('#day' + i + "-description").html(data.daily[i].weather[0].description);
                        $('#day' + i + "-humidity").html(parseInt(data.daily[i].humidity));
                        $('#day' + i + "-wind").html(parseFloat(data.daily[i].wind_speed));
                        $('#day' + i + "-pressure").html(parseInt(data.daily[i].pressure));
                    }
                });
            });
        });
    });
});