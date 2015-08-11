(function() {
    var app = angular.module('artGallery', []);


    app.controller('ArtGalleryController', function () {
        this.product = artPieces;
        this.style_tabs = artStyles;
        this.saved = "All";
    });

    var artPieces = [
        {
            artist_name: "Pablo Picasso",
            art_title: "Guernica",
            art_style: ["Cubism", "All"],
            art_description: "Guernica is a mural-sized oil painting on canvas by Spanish artist Pablo Picasso " +
            "completed by June 1937.[1] The painting, which uses a palette of gray, black, and white, is known " +
            "as one of the most moving and powerful anti-war paintings in history.[2] Standing at 3.49 metres " +
            "(11 ft 5 in) tall and 7.76 metres (25 ft 6 in) wide, the large mural shows the suffering of people, " +
            "animals, and buildings wrenched by violence and chaos.",
            art_thumbnail: "images/art.jpg",
            art_url: "http://www.museoreinasofia.es/sites/default/files/obras/DE00050.jpg"
        },
        {
            artist_name: "Pablo Picasso",
            art_title: "Les Demoiselles d’Avignon",
            art_style: ["Cubism", "All"],
            art_description: "Les Demoiselles d'Avignon (The Young Ladies of Avignon, and originally titled The " +
            "Brothel of Avignon)[2] is a large oil painting created in 1907 by the Spanish artist Pablo Picasso " +
            "(1881–1973). The work portrays five nude female prostitutes from a brothel on Carrer d'Avinyó " +
            "(Avinyó Street) in Barcelona. Each figure is depicted in a disconcerting confrontational manner and " +
            "none are conventionally feminine.",
            art_thumbnail: "images/art.jpg",
            art_url: "http://resources.saylor.org.s3.amazonaws.com/ARTH/ARTH111/ARTH111-9.1-LesDemoisellesdAvignon-Smarthistory-CCBYNCSA_files/avignon.jpg"
        },
        {
            artist_name: "Leonardo da Vinci",
            art_title: "Mona Lisa",
            art_style: ["Renaissance", "All"],
            art_description: "The Mona Lisa (Italian: Monna Lisa [ˈmɔnna ˈliːza] or La Gioconda [la dʒoˈkonda], " +
            "French: La Joconde) is a half-length portrait of a woman by the Italian artist Leonardo da Vinci, " +
            "which has been acclaimed as 'the best known, the most visited, the most written about, the most sung " +
            "about, the most parodied work of art in the world'.",
            art_url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg"
        },
        {
            artist_name: "Vincent van Gogh",
            art_title: "Starry Night",
            art_style: ["Impressionism", "All"],
            art_description: "The Starry Night is an oil on canvas by the Dutch post-impressionist painter Vincent " +
            "van Gogh. Painted in June, 1889, it depicts the view from the east-facing window of his asylum room at " +
            "Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village.[1][2][3] It has " +
            "been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired " +
            "through the Lillie P. Bliss Bequest. It is regarded as among Van Gogh's finest works,[4] and one of " +
            "the most recognized monuments in the history of Western culture.",
            art_thumbnail: "images/art.jpg",
            art_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        },
        {
            artist_name: "Edvard Munch",
            art_title: "The Scream",
            art_style: ["Impressionism", "All"],
            art_description: "The Scream (Norwegian: Skrik) is the popular name given to each of four versions of " +
            "a composition, created as both paintings and pastels, by the Expressionist artist Edvard Munch between" +
            " 1893 and 1910. Der Schrei der Natur (The Scream of Nature) is the title Munch gave to these works, all " +
            "of which show a figure with an agonized expression against a landscape with a tumultuous orange sky. " +
            "Arthur Lubow has described The Scream as an icon.",
            art_thumbnail: "images/art.jpg",
            art_url: "http://1.bp.blogspot.com/-LAAIMgwOqyU/Ubrz2nz2KhI/AAAAAAAAAIo/lbW4Mg33JSE/s1600/munch_el_grito.jpg"
        },
        {
            artist_name: "Vincent Van Gogh",
            art_title: "The Potato Eaters",
            art_style: ["Realism", "All"],
            art_description: "The Potato Eaters (Dutch: De Aardappeleters) is an oil painting by Dutch artist" +
            " Vincent van Gogh painted in April 1885 in Nuenen, Netherlands.[1] It is in the Van Gogh Museum in " +
            "Amsterdam. A preliminary oil sketch of the painting is at the Kröller-Müller Museum in Otterlo, and " +
            "he also made lithographs of the image, which are held in collections including the Museum of Modern " +
            "Art in New York City.",
            art_thumbnail: "images/art.jpg",
            art_url: "https://jakemarsh7.files.wordpress.com/2014/03/van_gogh_potato_eaters.jpg"
        }

    ];

    //Function to get art styles. No repetition.
    function getArtStyles( array ) {
        var stylesArray = new Array();
        for (var i = 0; i < array.length; i++){
            if (stylesArray.indexOf(array[i].art_style[0]) === -1)  {
                stylesArray.push(array[i].art_style[0]);
            }
        }
        return stylesArray;
    };


    var artStyles = getArtStyles( artPieces );
    console.log(artStyles);

})();