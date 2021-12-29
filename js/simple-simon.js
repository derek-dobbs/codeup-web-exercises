"use strict";
(function () {
    // alert("Test simple-simon.js");
    $(document).ready(function() {
        $('#reset-button').click(function (event) {
            event.preventDefault();

            $('.box').toggleClass('bg-color-none');
        }); // end $('#reset-button').click
    }); //end $(document).ready
})();