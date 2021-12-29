"use strict";
(function () {
    // alert("Test simple-simon.js");
    $(document).ready(function() {
        $('.box').toggleClass('bg-color-none');

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

        function flashSequence () {
            $('.button').css('visibility', 'hidden');
            $('h1').css('visibility', 'hidden');
            setTimeout(function () {
                $('#green-box').toggleClass('bg-color-none');
            },1000);

            setTimeout(function () {
                $('#green-box').toggleClass('bg-color-none');
            },1500);

            setTimeout(function () {
                $('#red-box').toggleClass('bg-color-none');
            },2000);

            setTimeout(function () {
                $('#red-box').toggleClass('bg-color-none');
            },2500);

            setTimeout(function () {
                $('#blue-box').toggleClass('bg-color-none');
            },3000);

            setTimeout(function () {
                $('#blue-box').toggleClass('bg-color-none');
            },3500);

            setTimeout(function () {
                $('#yellow-box').toggleClass('bg-color-none');
            },4000);

            setTimeout(function () {
                $('#yellow-box').toggleClass('bg-color-none');
            },4500);

            setTimeout(function () {
                $('.box').toggleClass('bg-color-none');
            }, 5000);

            setTimeout(function () {
                $('h1').css('visibility', 'visible');
                $('.button').css('visibility', 'visible');
            }, 5000);
        } // end flashSequence

        // flashSequence();

        $('#start-button').click(function () {
            // alert("Start button clicked");
        });
    }); //end $(document).ready
})();