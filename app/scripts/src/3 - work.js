$(document).ready(function(){
    if($('.site--work').length) {
        // Parallax
        $('.site__header--work').parallax({imageSrc: './images/bg-header-work.png'});

        // Blog slider
        slidr.create('blog-slider').start();
    }
        
    // Fade in on scroll
    sr.reveal('.featured-work-card', { 
        duration: revealDuration, 
        afterReveal: function (domEl) {
            // Remove transform property added by ScrollReveal
            $(domEl).css('transform','');

            // Trigger resize and scroll to fix parallax
            $(window).trigger('resize').trigger('scroll');
        }
    }, 50);

    // Show details on click
    $('.featured-work-card').click(function(){
        var cardClass = 'featured-work-card--detail-open';
        var detailClass = 'featured-work-detail--open';

        var clickedCard = this;
        var $clickedCard = $(clickedCard);
        var $clickedCardDetail = $('#' + clickedCard.getAttribute('data-detail-id'));
        var $previousOpenCard = $('.' + cardClass);
        var $previousOpenDetail = $('.' + detailClass);

        // If another detail pane is open
        if($previousOpenDetail.length > 0) {

            // If the previous open detail on the same row as this one
            if($previousOpenDetail.css('order') === $clickedCardDetail.css('order')) {

                // Close the previous open detail pane
                closePreviousOpenDetailPane(false)
                // Open this detail pane
                openClickedDetailPane(false);

            // If the previous open detail on a different row as this one
            } else {

                // Close the previous open detail pane
                closePreviousOpenDetailPane(true)
                // Open this detail pane
                openClickedDetailPane(true);
            }

        } else {

            // Open this detail pane
            openClickedDetailPane(true);
        }

        function openClickedDetailPane(animate) {
            $clickedCard.addClass(cardClass);
                
            if(animate){
                $clickedCardDetail.slideDown(400, function(){
                    $(this).addClass(detailClass);

                    // Trigger resize and scroll to fix parallax
                    $(window).trigger('resize').trigger('scroll');
                });
            } else {
                $clickedCardDetail.show(0, function(){
                    $(this).addClass(detailClass);

                    // Trigger resize and scroll to fix parallax
                    $(window).trigger('resize').trigger('scroll');
                });
            }
            
        }

        function closePreviousOpenDetailPane(animate) {

            if(animate) {
                $previousOpenDetail.slideUp(400, function(){
                    $previousOpenCard.removeClass(cardClass);
                    $previousOpenDetail.removeClass(detailClass);

                    // Trigger resize and scroll to fix parallax
                    $(window).trigger('resize').trigger('scroll');
                });
            } else {
                $previousOpenDetail.hide(0, function(){
                    $previousOpenCard.removeClass(cardClass);
                    $previousOpenDetail.removeClass(detailClass);

                    // Trigger resize and scroll to fix parallax
                    $(window).trigger('resize').trigger('scroll');
                });
            }
        }
    });
});
    