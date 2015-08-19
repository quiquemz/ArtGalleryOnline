$(document).ready()
{
    function clickTab( elementToReload ){

        var artStyle = "All"; //initializing artStyle
        var length = $(".grid-box").length; //getting .grid-box length

        //Click function for
        $( ".tabs-style" ).click(function() {

            $('.grid-item').hide();
            artStyle = $(this).text();

            for ( var i = 0; i < length; i++ ) {
                var dataStyle = $('.grid-box')[i].attributes[1].value;
                if (dataStyle === artStyle) {
                    $('.grid-item').eq(i).show();
                }
                else if (artStyle === "All") {
                    $('.grid-item').eq(i).show();
                }
            }

            elementToReload.masonry();
        });
    }

    function search( elementToSearch, elementToReload ){

        $(".form-control").keyup(function() {

            var value = $(this).val().toLowerCase();

            console.log(value);

            elementToSearch.hide();

            elementToSearch.each( function() {

                var text = $(this).text().toLowerCase();
                console.log(text);

                if( text.indexOf( value ) !== -1) {

                    $(this).show();

                }
            });

            elementToReload.masonry();
        })

    };

    //Using JQuery
    //TABS AjaxRequest
    $.ajax({
        method: "GET",
        url: "json/tabs.json",
        success: function(file){
            $('.nav-pills').append(
                "<li class='tabs-style'>" +
                "<a class='tab-button'>All</a>" +
                "</li>"
            );
            for (var i = 0; i < file.length; i++) {
                $('.nav-pills').append(
                    "<li class='tabs-style'>" +
                    "<a class='tab-button'>" + file[i] + "</a>" +
                    "</li>"
                );
            };

        }
    });

    //Gallery AjaxRequest
    $.ajax({
        method: "GET",
        url: "json/gallery.json",
        success: function(file){
            for (var i = 0; i < file.length; i++) {

                var template = "<div class='grid-item'>" +
                    "<div class='grid-box' data-style='" + file[i].art_style[0] + "'>" +
                    "<img class='img-responsive' src='" + file[i].art_url +
                    "' alt='Image not available'/>" +
                    "<h4>" + file[i].art_title + " | " + file[i].artist_name + "</h4>" +
                    "<p>" + file[i].art_description + "</p>" +
                    "<div class='link-container'>" +
                    "<a href='#' class='link-color'>Check complete info</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $('#masonry-grid').append(template);
            };
            // jQuery
            var $container = $('#masonry-grid');
            var $box = $('.grid-item');

            // initialize
            $container.masonry({
                columnWidth: 320,
                itemSelector: '.grid-item'
            });

            $container.masonry('reloadItems');

            clickTab($container);
            search($box, $container);
        }
    });

    /*
    //Using JavaScript

    function load(url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if((xhr.readyState < 4) || xhr.status !== 200) return;
            callback(xhr);
        };

        xhr.open('GET', url, true);
        xhr.send('');
    };


    load('json/gallery.json', function(xhr){

        var file = JSON.parse(xhr.fileText);

        for (var i = 0; i < file.length; i++) {

            var template = "<div class='grid-item'>" +
                "<div class='grid-box' data-style='" + file[i].art_style[0] + "'>" +
                "<img class='img-responsive' src='" + file[i].art_url +
                "' alt='Image not available'/>" +
                "<h4>" + file[i].art_title + " | " + file[i].artist_name + "</h4>" +
                "<p>" + file[i].art_description + "</p>" +
                "<div class='link-container'>" +
                "<a href='#' class='link-color'>Check complete info</a>" +
                "</div>" +
                "</div>" +
                "</div>";

            $('#masonry-grid').append(template);

        };


    });
    */
}