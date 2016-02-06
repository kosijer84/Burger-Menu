/*** OPEN MENU ***/

$(document).ready(function() {
    $('#showmenu').click(function() {


        $('.menu').toggleClass("open");
        $('.burger').toggleClass("selected");

        setTimeout(function(){
            $(".active").addClass("active-background");
        }, 850);

        $(".active").removeClass("active-background");

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