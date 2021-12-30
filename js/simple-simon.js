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
            $('#round-display').css('display', 'block');
            $('#start-button').css('display', 'none');
            $('#reset-button').css('display', 'block');
            $('.box').toggleClass('bg-color-none');
        }); // end $('#start-button').click

        $('#reset-button').click(function (event) {
            event.preventDefault();
            $('#round-display').css('display', 'none');
            $('#start-button').css('display', 'block');
            $('#reset-button').css('display', 'none');
        });

        function randomColor() {
            function randomNumber(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
            }

            let colorArray = ['green', 'red', 'yellow', 'blue'];

            return colorArray[randomNumber(0, colorArray.length -1)];
        }

        function randomSequence () {
            let newArray = [];

            for (let i = 0; i < 4; i++) {
                newArray.push(randomColor());
            }

            return newArray;
        }

        // console.log(randomSequence());

        let boxArray = $( ".box" ).toArray();
        let newBoxArray = [];

        for (let i = 0; i < boxArray.length; i++) {
            newBoxArray.push(boxArray[i].id);
        }

        console.log(newBoxArray);

        // console.log(boxArray[0]);
        // console.log(boxArray[0].id);
        
        function randomBox() {
            
        }

    }); //end $(document).ready
})();