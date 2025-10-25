/**
  * preloader
  * megamenu
  * header menu
  * close nav menu
  * menu search box
  * sidebar box dashboard
  * dark button
  * Save button
  * owlcarousel
  * mixitup filter
*/

; (function ($) {
    //"use strict";

    // preloader
    function handlePreloader() {
        if ($('#preloader').length > 0) {
            $('#preloader').delay(200).fadeOut(200);
            // $("body").delay(600).addClass('loaded');
        }
    }
    var megamenu = function () {
        $(document).on("click", ".mega-menu", function () {
            $(this).next().slideToggle(100);
        });
    };

    var scrollmenu = function () {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();
    
        $(window).scroll(function () {
            didScroll = true;
        });
    
        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
    
        function hasScrolled() {
            var st = $(window).scrollTop();
    
            // Make scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;
    
            // If scrolled down and past the navbar, add class .nav-up.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }
    
            lastScrollTop = st;
        }
    };


    // Dom Ready
    $(function () {
        handlePreloader();
        megamenu();
        scrollmenu();


    });

    
    


})(jQuery);