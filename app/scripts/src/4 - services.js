$(document).ready(function() {
    // Parallax
    $('.site__header--services').parallax({imageSrc: './images/bg-header-services.png'});

    // Set the height of the service panels section to the height of the panels
    var $servicePanels = $('.service-panels');
    var originalServicesHeight = $servicePanels.height();
    $servicePanels.css('height', originalServicesHeight + 'px');
    $servicePanels.removeClass('service-panels--preload');
    $('.service-panels__panel--preload').removeClass('service-panels__panel--preload');


    $('.service-panels__panel').click(function(){
        var clickedPanel = this;
        var $clickedPanel = $(clickedPanel);
        var $clickedPanelDetail = $('#' + clickedPanel.getAttribute('data-detail-id'));

        // Prepare the container
        $servicePanels.addClass('services-panels--detail-open');

        // Unselect the previously selected one
        $('.services-panels__panel').removeClass('services-panels__panel--selected');
        
        // Select this one
        $(this).addClass('services-panels__panel--selected');

        // Prepare the container's height
        originalServicesHeight = $servicePanels.height();
        $servicePanels.animate({height: $clickedPanelDetail.height() + 'px'});

        // Show the detail pane 
        $clickedPanelDetail.addClass('service-panel-detail--open');
    });

    $('.service-panel-detail__close-button').click(function() {
        
        // Reset the card position
        $('.services-panels__panel--selected').removeClass('services-panels__panel--selected');
        
        // Restore the container's height
        $servicePanels.animate({height: originalServicesHeight + 'px'}, 200, function() {
            
            // Reset the container
            $('.service-panels--detail-open').removeClass('service-panels--detail-open').css('height', '');
        });

        // Close the detail pane
        $('.service-panel-detail--open').removeClass('service-panel-detail--open');
    });
});