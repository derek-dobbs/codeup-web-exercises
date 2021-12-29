"use strict";
(function () {
    // alert("Test simple-simon.js");
    $(document).ready(function() {
        $('#green-box').click(function () {
            alert("Green box was clicked");
        }); // end $('#green-box').click

        $('#red-box').click(function () {
            alert("Red box was clicked");
        }); // end $('#red-box').click

        $('#yellow-box').click(function () {
            alert("Yellow box was clicked");
        }); // end $('#yellow-box').click

        $('#blue-box').click(function () {
            alert("Blue box was clicked");
        }); // end $('#blue-box').click

        $('#reset-button').click(function (event) {
            event.preventDefault();

            $('.box').toggleClass('bg-color-none');
        }); // end $('#reset-button').click
    }); //end $(document).ready
})();