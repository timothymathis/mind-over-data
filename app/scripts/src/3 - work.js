// Show details on click
$('.featured-work-card').click(function(){
    var cardClass = 'featured-work-card--detail-open';
    var detailClass = 'featured-work-detail--open';

    var clickedCard = this;
    var $clickedCard = $(clickedCard);
    var $previousOpenCard = $(cardClass);
    var $previousOpenDetail = $(detailClass);
    // Close any other open detail panes
    console.log($previousOpenDetail);
    
    $previousOpenDetail.slideUp(400, function(){
        $previousOpenCard.removeClass(cardClass);
        $previousOpenDetail.removeClass(detailClass);
    });

    // Open this detail pane
    $clickedCard.addClass(cardClass);
    $('#' + clickedCard.getAttribute('data-detail-id')).slideDown(400, function(){
        $(this).addClass(detailClass);
    });
    
})