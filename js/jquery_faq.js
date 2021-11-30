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
        $('ul').each(function (index, element) {
            $(this).children().last().css('background-color', 'yellow');
        });
    });

    //When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
    $('h3').click(function () {
        $(this).next().children().css('font-weight', 'bold');
    });

    //When any list item is clicked, first li of the parent ul should have a font color of blue.
    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    });

});