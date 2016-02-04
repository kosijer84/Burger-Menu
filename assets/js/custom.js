
/*** TEXT ON HOME PAGE ***/

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000, showNextQuote);
    }

    showNextQuote();

})();

/*** OPEN MENU ***/

$(document).ready(function() {
    $('#showmenu').click(function() {
        $('.menu').toggleClass("open");
        $('.burger').toggleClass("selected");

        var windowWidth = $(window).width();
        var smaller = 768;
        if(windowWidth  < smaller) {
            $('.menu').addClass("navbar-small");
        }
    });


});




/* SHOW NAVBAR AFTER 50PX AND OPEN MENU */

$(window).on("scroll", function() {
    if($(window).scrollTop() >= 50) {
        $(".menu-on").addClass("sticky-menu");

        var windowWidth = $(window).width();
        var smaller = 768;
        if(windowWidth  > smaller) {
            $('.menu').addClass("open");
        }

    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".menu-on").removeClass("sticky-menu");
       $('.menu').removeClass("open");
    }


});

/* SLIDE ON CLICK */

$('.carousel-linked-nav > li > a').click(function() {

    // grab href, remove pound sign, convert to number
    var item = Number($(this).attr('href').substring(1));

    // slide to number -1 (account for zero indexing)
    $('#myminiCarousel').carousel(item - 1);

    // remove current active class
    $('.carousel-linked-nav .active').removeClass('active');

    // add active class to just clicked on item
    $(this).parent().addClass('active');

    // don't follow the link
    return false;
});

/* AUTOPLAY NAV HIGHLIGHT */

// bind 'slid' function
$('#myminiCarousel').bind('slid', function() {

    // remove active class
    $('.carousel-linked-nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel .item.active').index();

    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

});