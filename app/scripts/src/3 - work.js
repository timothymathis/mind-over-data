$(document).ready(function(){
    // Parallax
    $('.site__header--work').parallax({imageSrc: './images/bg-header-work.png'});
    
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
                closePreviousOpenDetailPane({animate: false})
                // Open this detail pane
                openClickedDetailPane({animate: false});

            // If the previous open detail on a different row as this one
            } else {

                // Close the previous open detail pane
                closePreviousOpenDetailPane({animate: true})
                // Open this detail pane
                openClickedDetailPane({animate: true});
            }

        } else {

            // Open this detail pane
            openClickedDetailPane({animate: true});
        }

        function openClickedDetailPane({animate=false}) {
            $clickedCard.addClass(cardClass);
                
            if(animate){
                $clickedCardDetail.slideDown(400, function(){
                    $(this).addClass(detailClass);
                });
            } else {
                $clickedCardDetail.show(0, function(){
                    $(this).addClass(detailClass);
                });
            }
            
        }

        function closePreviousOpenDetailPane({animate=false}) {

            if(animate) {
                $previousOpenDetail.slideUp(400, function(){
                    $previousOpenCard.removeClass(cardClass);
                    $previousOpenDetail.removeClass(detailClass);
                });
            } else {
                $previousOpenDetail.hide(0, function(){
                    $previousOpenCard.removeClass(cardClass);
                    $previousOpenDetail.removeClass(detailClass);
                });
            }
        }
            
        
    })
});
    