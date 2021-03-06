"use strict";
(function () {
    $(document).ready(function() {
        let roundNumber = 1;
        let clickSequence = [];
        let sequenceArray = [];

        $('#round-count').html(roundNumber);
        $('#round-display').css('display', 'none');
        $('#game-over').css('display', 'none');
        $('#reset-button').css('display', 'none');

        $('.box').toggleClass('bg-color-none');
        ///// BOX LISTENERS ////////////////////////////////////////////////////////////////////////////////////////////
        $('#green-box').click(function (event) {
            // alert("Green box was clicked");
            let id = $(this).attr('id');
            clickSequence.push(id);
            console.log("User Click Sequence: " + clickSequence);
        }); // end $('#green-box').click

        $('#red-box').click(function () {
            // alert("Red box was clicked");
            let id = $(this).attr('id');
            clickSequence.push(id);
            console.log("User Click Sequence: " + clickSequence);
        }); // end $('#red-box').click

        $('#yellow-box').click(function () {
            // alert("Yellow box was clicked");
            let id = $(this).attr('id');
            clickSequence.push(id);
            console.log("User Click Sequence: " + clickSequence);
        }); // end $('#yellow-box').click

        $('#blue-box').click(function () {
            // alert("Blue box was clicked");
            let id = $(this).attr('id');
            clickSequence.push(id);
            console.log(clickSequence);
        }); // end $('#blue-box').click
        ///// END BOX LISTENERS ////////////////////////////////////////////////////////////////////////////////////////

        $('#reset-button').click(function (event) {
            event.preventDefault();
            $('.box').toggleClass('bg-color-none');
        }); // end $('#reset-button').click

        function startScreenSequence () {
            $('.button').css('visibility', 'hidden');
            $('h1').css('visibility', 'hidden');
            $('#game-over').css('display', 'none');
            setTimeout(function () {
                $('#green-box').css('opacity', '1').css('border', '5px solid black');
            },1000);

            setTimeout(function () {
                $('#green-box').css('opacity', '0.25').css('border', '1px solid black');
            },1500);

            setTimeout(function () {
                $('#red-box').css('opacity', '1').css('border', '5px solid black');
            },2000);

            setTimeout(function () {
                $('#red-box').css('opacity', '0.25').css('border', '1px solid black');
            },2500);

            setTimeout(function () {
                $('#blue-box').css('opacity', '1').css('border', '5px solid black');
            },3000);

            setTimeout(function () {
                $('#blue-box').css('opacity', '0.25').css('border', '1px solid black');
            },3500);

            setTimeout(function () {
                $('#yellow-box').css('opacity', '1').css('border', '5px solid black');
            },4000);

            setTimeout(function () {
                $('#yellow-box').css('opacity', '0.25').css('border', '1px solid black');
            },4500);

            setTimeout(function () {
                $('#green-box').css('opacity', '1');
                $('#red-box').css('opacity', '1');
                $('#yellow-box').css('opacity', '1');
                $('#blue-box').css('opacity', '1');
            }, 5000);

            setTimeout(function () {
                $('h1').css('visibility', 'visible');
                $('.button').css('visibility', 'visible');
            }, 5000);
        } // end startScreenSequence

        // startScreenSequence();
/////// RANDOM BOX /////////////////////////////////////////////////////////////////////////////////////////////////////
        function randomBox() {
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
            } //end randomBoxID

            let randomID = $(`#${randomBoxID()}`);
            sequenceArray.push(randomID.attr('id'));
            console.log("Sequence Array: " + sequenceArray);

            setTimeout(function () {
                randomID.css('opacity', '0.25').css('border', '1px solid black');
            }, 500);

            setTimeout(function () {
                //The following line of code randomly chooses a box and changes its opacity to 1
                randomID.css('opacity', '1').css('border', '5px solid black');

            },2000);

            setTimeout(function () {
                //The following line of code randomly chooses a box and changes its opacity to 1
                randomID.css('opacity', '0.25').css('border', '1px solid black');
            },2500);
        } //end randomBox()
/////// END RANDOM BOX /////////////////////////////////////////////////////////////////////////////////////////////////

/////// RANDOM SEQUENCE /////////////////////////////////////////////////////////////////////////////////////////////////
        function randomSequence() {

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

            var count = 0;
            var max = 3;
            var interval = 1000; // interval time in milliseconds

            var intervalId = setInterval(function () {
                if (count >= max) {
                    clearInterval(intervalId);
                    // console.log('All done');
                } else {
                    count++;
                    randomBox();
                }
            }, interval);

            function isMatch() {
                for (let i = 0; i < sequenceArray.length;) {
                    if (clickSequence[i] === sequenceArray[i]) {
                        i++;
                    }else {
                        return false;
                    }
                }
                return true;
            }

            setTimeout(function () {
                if (isMatch()) {
                    alert("Match!");
                }else {
                    $('#round-display').css('display', 'none');
                    $('#game-over').css('display', 'block');
                }
            }, 10000);
        }// end randomSequence()
/////// END RANDOM SEQUENCE /////////////////////////////////////////////////////////////////////////////////////////////////
        $('#start-button').click(function (event) {
            event.preventDefault();

            $('#game-over').css('display', 'none');
            $('#round-display').css('display', 'block');

            $('#green-box').css('opacity', '0.25');
            $('#red-box').css('opacity', '0.25');
            $('#yellow-box').css('opacity', '0.25');
            $('#blue-box').css('opacity', '0.25');

            $('#round-display').css('display', 'block');
            $('#start-button').css('display', 'none');
            $('#reset-button').css('display', 'block');
            $('.box').toggleClass('bg-color-none');

            randomSequence();
        }); // end $('#start-button').click

        $('#reset-button').click(function (event) {
            event.preventDefault();

            $('#game-over').css('display', 'none');
            $('#round-display').css('display', 'block');

            $('#round-display').css('display', 'none');
            $('#start-button').css('display', 'block');
            $('#reset-button').css('display', 'none');
        });// end reset-button.click
    }); //end $(document).ready
})();// end IIFE
