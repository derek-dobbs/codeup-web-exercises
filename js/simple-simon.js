"use strict";
(function () {
    $(document).ready(function() {
        let roundNumber = 1;

        $('#round-count').html(roundNumber);
        $('#round-display').css('display', 'none');
        $('#reset-button').css('display', 'none');

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
                $('#green-box').addClass('bg-color-green');
            },1000);

            setTimeout(function () {
                $('#green-box').removeClass('bg-color-green');
            },1500);

            setTimeout(function () {
                $('#red-box').addClass('bg-color-red');
            },2000);

            setTimeout(function () {
                $('#red-box').removeClass('bg-color-red');
            },2500);

            setTimeout(function () {
                $('#blue-box').addClass('bg-color-blue');
            },3000);

            setTimeout(function () {
                $('#blue-box').removeClass('bg-color-blue');
            },3500);

            setTimeout(function () {
                $('#yellow-box').addClass('bg-color-yellow');
            },4000);

            setTimeout(function () {
                $('#yellow-box').removeClass('bg-color-yellow');
            },4500);

            setTimeout(function () {
                $('#green-box').addClass('bg-color-green');
                $('#red-box').addClass('bg-color-red');
                $('#yellow-box').addClass('bg-color-yellow');
                $('#blue-box').addClass('bg-color-blue');
            }, 5000);

            setTimeout(function () {
                $('h1').css('visibility', 'visible');
                $('.button').css('visibility', 'visible');
            }, 5000);
        } // end flashSequence

        flashSequence();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // this code will produce a console log every second
        // when count >= max, the interval is cancelled, and the logging will stop

        // var count = 0;
        // var max = 10;
        // var interval = 1000; // interval time in milliseconds
        //
        // var intervalId = setInterval(function () {
        //     if (count >= max) {
        //         clearInterval(intervalId);
        //         console.log('All done');
        //     } else {
        //         count++;
        //         console.log('Repeating this line ' + count);
        //     }
        // }, interval);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $('#start-button').click(function (event) {
            event.preventDefault();

            $('#green-box').removeClass('bg-color-green');
            $('#red-box').removeClass('bg-color-red');
            $('#yellow-box').removeClass('bg-color-yellow');
            $('#blue-box').removeClass('bg-color-blue');

            $('#round-display').css('display', 'block');
            $('#start-button').css('display', 'none');
            $('#reset-button').css('display', 'block');
            $('.box').toggleClass('bg-color-none');
        }); // end $('#start-button').click

        $('#reset-button').click(function (event) {
            event.preventDefault();

            $('#green-box').removeClass('bg-color-green');
            $('#red-box').removeClass('bg-color-red');
            $('#yellow-box').removeClass('bg-color-yellow');
            $('#blue-box').removeClass('bg-color-blue');

            $('#round-display').css('display', 'none');
            $('#start-button').css('display', 'block');
            $('#reset-button').css('display', 'none');
        });

        //function randomBoxID will return a randomly chosen box id name
        function randomBoxID() {
            // randomNumber() will generate a number between the min (inclusive) and max (inclusive).
            function randomNumber(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
            }// end randomNumber()

            //The following line of code creates a node(is this the correct terminology?) of all divs with the class of box and turns it into an array with the name of boxArray.
            let boxArray = $( ".box" ).toArray();

            return boxArray[randomNumber(0, boxArray.length - 1)].id;

        } //end randomBox

        console.log(randomBoxID());

    }); //end $(document).ready
})();