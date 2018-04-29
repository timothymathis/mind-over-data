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

    // Services
    $('.service-card').click(function(){

        // Prepare the container
        $('.services').addClass('services--detail-open');

        // Unselect the previously selected one
        $('.service-card').removeClass('service-card--selected');
        
        // Select this one
        $(this).addClass('service-card--selected');
    });

    // Testimonial slider
    slidr.create('testimonial-slider').auto();
});

