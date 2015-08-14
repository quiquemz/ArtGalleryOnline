$(document).ready()
{

   //Using JQuery
    $.ajax({
        method: "GET",
        url: "js/gallery.json",
        success: function(response){
            for (var i = 0; i < response.length; i++) {

                var template = "<div class='grid-item'>" +
                    "<div class='grid-box'  ng-show=(('" + response[i].art_style[0] + "'==gallery.saved)||('" + response[i].art_style[1]+"'==gallery.saved)) >" +
                    "<img class='img-responsive' src='" + response[i].art_url +
                    "' alt='Image not available'/>" +
                    "<h4>" + response[i].art_title + " | " + response[i].artist_name + "</h4>" +
                    "<p>" + response[i].art_description + "</p>" +
                    "<div class='link-container'>" +
                    "<a href='#' class='link-color'>Check complete info</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>";

                $('#masonry-grid').append(template);
            };
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


    load('js/gallery.json', function(xhr){

        var response = JSON.parse(xhr.responseText);

        for (var i = 0; i < response.length; i++) {

            var template = "<div class='grid-item'>" +
                "<div class='grid-box'  ng-show=(('" + response[i].art_style[0] + "'==gallery.saved)||('" + response[i].art_style[1]+"'==gallery.saved)) >" +
                "<img class='img-responsive' src='" + response[i].art_url +
                "' alt='Image not available'/>" +
                "<h4>" + response[i].art_title + " | " + response[i].artist_name + "</h4>" +
                "<p>" + response[i].art_description + "</p>" +
                "<div class='link-container'>" +
                "<a href='#' class='link-color' >Check complete info</a>" +
                "</div>" +
                "</div>" +
                "</div>";

            $('#masonry-grid').append(template);

        };


    });
    */
}