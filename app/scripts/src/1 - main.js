// Global variables
var revealDuration = 1500;
window.sr = ScrollReveal();

$(document).ready(function() {
    // Sticky navigation
    var headerNavigation = $('.navigation');
    var headerLogo = $('.navigation__logo-image--scrolled');
    var	scrollTransitionPoint = 600;
    var	$window	= $(window);

    // Trigger the scroll event to set the inital navigation appearance
    $(window).scroll();

    var addedStickyClass = false;
    var removedStickyClass = true;
    $window.on("scroll", function() {
        var currentScrollPosition = $window.scrollTop();
        
        // If scrolling past the transition point
        if(currentScrollPosition > scrollTransitionPoint){

            // If it doesn't already have the class
            if(!addedStickyClass) {

                // Add the sticky class
                headerNavigation.addClass("navigation--scrolled")
                addedStickyClass = true;
                removedStickyClass = false;

                // Make fully opaque
                headerNavigation.css('background-color', 'rgba(255, 255, 255, 1)')
                headerLogo.css('opacity', '1');
            }

        // If scrolling above the transition point
        } else {
            var percentageToComplete = currentScrollPosition/scrollTransitionPoint;

            // Progressive transititions
            headerNavigation.css('background-color', 'rgba(255, 255, 255,' + percentageToComplete + ')')
            headerLogo.css('opacity', percentageToComplete);

            if(!removedStickyClass) {
                headerNavigation.removeClass("navigation--scrolled");
                addedStickyClass = false;
                removedStickyClass = true;
            }
        }
    });
});
