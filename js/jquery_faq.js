"use strict";
$(document).ready(function() {
    $('dd').addClass('invisible');

    $('#show-answers').click(function (event) {
       event.preventDefault();
        $('dd').toggleClass('invisible');
    });

    // When any of the dt elements is clicked, the element that was clicked should be highlighted.
    $('dt').click(function () {
        $(this).css('background-color', 'yellow');
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});