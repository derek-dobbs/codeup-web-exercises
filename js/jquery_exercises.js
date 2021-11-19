$(document).ready(function() {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // alert( 'The DOM has finished loading!' );

    // $('*').css('border', '1px solid #F00');

    // $('body').css('background-color', '#D3D3D3');
    // $('.paragraph').css('background-color', 'yellow');
    // $('#main-heading').css('color', 'blue');
    // $('.paragraph').css('color', 'purple');
    // $('span').css('font-style', 'italic');
    //
    // //Use jQuery to select an element by the id. Alert the contents of the element.
    // var contents = $('#paragraph-1').html();
    // alert(contents);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // $('.codeup').css('border', '1px solid red');
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // $('li').css('font-size', '20px');
    // $('h1, p, li').css('background-color', 'yellow');
    //
    // alert($('h1').html());
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('h1').click(function() {
        $(this).css('background-color', 'hotpink');
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('#textfield').keyup(function() {
        alert('A key was released!');
    });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////




});
