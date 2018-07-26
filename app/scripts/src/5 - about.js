$(document).ready(function(){
    // Parallax
    $('.site__header--about').parallax({imageSrc: './images/bg-header-about.png'});

    // Fade in on scroll
    sr.reveal('.about-card', { 
        duration: revealDuration, 
        afterReveal: function (domEl) {
            // Remove transform property added by ScrollReveal
            $(domEl).css('transform','');
        }
    }, 50);

    // Show details on click
    $('.about-card').click(function(){
        var cardClass = 'about-card--detail-open';
        var detailClass = 'about-card-detail--open';

        var clickedCard = this;
        var $clickedCard = $(clickedCard);
        var $clickedCardDetail = $('#' + clickedCard.getAttribute('data-detail-id'));
        var $previousOpenCard = $('.' + cardClass);
        var $previousOpenDetail = $('.' + detailClass);
        var $allCards = $('.about-card');

        // Add a class to the container
        $('.about-sections').addClass('about-sections--detail-open');

        // Add a class to all the other cards
        $allCards.addClass('about-card--not-selected');
        $clickedCard.removeClass('about-card--not-selected');

        // If another detail pane is open
        if($previousOpenDetail.length > 0) {
            // Close the previous open detail pane
            closePreviousOpenDetailPane(false)
            // Open this detail pane
            openClickedDetailPane(false);
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

    // Close button
    $('.about-sections__close-button').click(function() {
        
        // Reset the card position
        $('.about-card--detail-open').removeClass('about-card--detail-open');
        
        // Reset the container
        $('.about-sections--detail-open').removeClass('about-sections--detail-open');

        // Restore the other cards
        $('.about-card').removeClass('about-card--not-selected');

        // Close the detail pane
        $('.about-card-detail--open').slideUp(600, function() {
            
            $(this).removeClass('about-card-detail--open');

            // Trigger resize and scroll to fix parallax
            $(window).trigger('resize').trigger('scroll');

        });
    });
});