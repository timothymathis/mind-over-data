$(document).ready(function() {
    // Parallax
    $('.site__header--services').parallax({imageSrc: './images/bg-header-services.png'});
    
    // Reveal on scroll
    sr.reveal('.service-panels__panel');

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

        
        // Unselect the previously selected one
        $('.service-panels__panel').removeClass('service-panels__panel--selected');
        
        // Select this one
        $(this).addClass('service-panels__panel--selected');
        
        // Prepare the container
        $servicePanels.addClass('service-panels--detail-open');
        
        // Prepare the container's height
        //originalServicesHeight = $servicePanels.height();
        $servicePanels.animate({height: $clickedPanelDetail.outerHeight() + 'px'}, function() {
            // Trigger resize and scroll to fix parallax
            $(window).trigger('resize').trigger('scroll');
        });

        // Show the detail pane 
        $clickedPanelDetail.addClass('service-panel-detail--open');
    });

    // Close button
    $('.service-panel-detail__close-button').click(function() {
        
        // Reset the card position
        $('.service-panels__panel--selected').removeClass('service-panels__panel--selected');
        
        // Restore the container's height
        $servicePanels.animate({height: originalServicesHeight + 'px'}, 200, function() {
            
            // Reset the container
            $('.service-panels--detail-open').removeClass('service-panels--detail-open');
            // Trigger resize and scroll to fix parallax
            $(window).trigger('resize').trigger('scroll');

        });

        // Close the detail pane
        $('.service-panel-detail--open').removeClass('service-panel-detail--open');
    });
});