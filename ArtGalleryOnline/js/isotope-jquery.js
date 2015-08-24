$(document).ready()
{

    var $container = $('#isotope-grid');

    setTimeout( function() {
        $container.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 320
            }
        });

        $('.tab-button').click(function() {
            $container.isotope();
        });

        $(".form-control").keyup(function() {

                $container.isotope('reloadItems').isotope();
                console.log("Test");

        });

        $('#tabs-box').on('show.bs.collapse', function() {
            $('.nav-pills').addClass('nav-stacked');
        });

        //Unstack menu when not collapsed
        $('#tabs-box').on('hide.bs.collapse', function() {
            $('.nav-pills').removeClass('nav-stacked');
        });


    }, 75);

}