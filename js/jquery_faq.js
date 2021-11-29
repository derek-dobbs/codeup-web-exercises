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
    // makes the last li in each ul have a yellow background.
    $('#turn-yellow').click(function () {
        // $('ul').children().last().css('background-color', 'yellow');
        $('ul').children().each(function (index, element) {
            // $(this).css('background-color', 'yellow');
            if(index === 3) {
                $(this).css('background-color', 'yellow');
            }
        });
    });
});