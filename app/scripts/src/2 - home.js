$(document).ready(function() {
    // Parallax
    //$('.what-to-expect').parallax({imageSrc: './images/bg-what-to-expect.jpg'});

    // Fade in on scroll
    sr.reveal('.hero__heading', { duration: revealDuration });
    sr.reveal('.hero__text', { duration: revealDuration });
    sr.reveal('.hero__button', { duration: revealDuration });
    sr.reveal('.clients__logo', { duration: revealDuration });
    sr.reveal('.smart-people-video__heading', { duration: revealDuration });
    sr.reveal('.smart-people-video__text', { duration: revealDuration });
    sr.reveal('.smart-people-video__video', { duration: revealDuration });
    sr.reveal('.services__heading', { duration: revealDuration });
    sr.reveal('.services__text', { duration: revealDuration });
    sr.reveal('.service-card', { duration: revealDuration });
    sr.reveal('.featured-work-card', { 
        duration: revealDuration, 
        afterReveal: function (domEl) {
            // Remove transform property added by ScrollReveal
            $(domEl).css('transform','');
        }
    }, 50);
    sr.reveal('.expectation', { 
        duration: revealDuration,
        beforeReveal: function(domEl) {
        },
        afterReveal: function (domEl) {
            $(window).trigger('resize').trigger('scroll');
        }
    }, 200);

    var originalServicesHeight;
    // Services
    $('.service-card').click(function(){
        var clickedCard = this;
        var $clickedCard = $(clickedCard);
        var $clickedCardDetail = $('#' + clickedCard.getAttribute('data-detail-id'));

        // Prepare the container
        $('.services').addClass('services--detail-open');

        // Unselect the previously selected one
        $('.service-card').removeClass('service-card--selected');
        
        // Select this one
        $(this).addClass('service-card--selected');

        // Prepare the contianer's height
        originalServicesHeight = $('.services').height();
        $('.services').animate({height: $clickedCardDetail.height() + 'px'});

        // Show the detail pane 
        $clickedCardDetail.addClass('services-detail--open');
    });

    $('.services-detail__close-button').click(function() {
        
        // Reset the card position
        $('.service-card--selected').removeClass('service-card--selected');
        
        // Restore the container's height
        $('.services').animate({height: originalServicesHeight + 'px'}, 200, function() {
            
            // Reset the container
            $('.services--detail-open').removeClass('services--detail-open').css('height', '');
        });

        // Close the detail pane
        $('.services-detail--open').removeClass('services-detail--open');
    });

    // Testimonial slider
    slidr.create('testimonial-slider').auto();
});

