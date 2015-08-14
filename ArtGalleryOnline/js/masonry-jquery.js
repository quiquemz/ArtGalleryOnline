$(document).ready()
{
    // jQuery
    var $container = $('#masonry-grid');

    // initialize
    $container.masonry({
        columnWidth: 320,
        itemSelector: '.grid-item'
    });

    $container.masonry('reloadItems');

}