$( document ).ready(function() {

    // init Masonry
    $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
            itemSelector: '.grid-item',
            gutter: '.gutter-sizer'
            // columnWidth: 25%,
            // gutter: 20
        }); 
      });

    // $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    //     event.preventDefault();
    //     $(this).ekkoLightbox({
    //         alwaysShowClose: true
    //     });
    // });

    $("#gallery-page .anchors .anchor").click(function() {

        // active anchor
        var clickedAnchor = $(this).attr("href");

        // clicked anchor
        var activeAnchor = $("#gallery-page .anchors .anchor.active").attr("href");

        // if anchor clicked is different to the current
        if(activeAnchor !== clickedAnchor) {

            // all images of the gallery
            var oldImages = $('.grid-item');

            // disabled all anchors link filters
            $("#gallery-page .anchors .anchor").removeClass("active");

            // set active anchor clicked
            $(this).addClass("active");

            // make an AJAX GET: request new images of category clicked as JSON
            allImages = {
                            "images":   
                                [
                                    {
                                        "src_low": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "src_high": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "#affreschi",
                                        "year": "1959",
                                        "description": ""
                                    },
                                    {
                                        "src_low": "img/gallery/AF_94_Primavera.jpg",
                                        "src_high": "img/gallery/AF_94_Primavera.jpg",
                                        "title": "Primavera",
                                        "category": "#affreschi",
                                        "year": "1959",
                                        "description": ""
                                    },
                                    {
                                        "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                                        "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                                        "title": "Uccelli nel bosco",
                                        "category": "#disegni",
                                        "year": "1985",
                                        "description": ""
                                    },
                                    {
                                        "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                                        "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                                        "title": "Pesce e fioria",
                                        "category": "#disegni",
                                        "year": "1959",
                                        "description": ""
                                    },
                                    {
                                        "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                                        "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                                        "title": "Cielo azzurro",
                                        "category": "#incisioni",
                                        "year": "1959",
                                        "description": ""
                                    },
                                    {
                                        "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                                        "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                                        "title": "Composizione verde Somlia",
                                        "category": "#incisioni",
                                        "year": "1985",
                                        "description": ""
                                    },
                                    {
                                        "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                                        "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                                        "title": "La casa del poeta",
                                        "category": "#sculture",
                                        "year": "1978",
                                        "description": ""
                                    }
                                    ,
                                    {
                                        "src_low": "img/gallery/IN_73_Monica.jpg",
                                        "src_high": "img/gallery/IN_73_Monica.jpg",
                                        "title": "Monica",
                                        "category": "#sculture",
                                        "year": "1978",
                                        "description": ""
                                    }
                                ]
                        };

            $.each(allImages.images, function(i, image) {
                if( image.category === clickedAnchor || clickedAnchor === "#all" ) {

                    var newImages = $('<div class="grid-item painting-container" name="#affreschi"><div class="row"><a href="' + image.src_high + '" data-toggle="lightbox" data-gallery="example-gallery"><img class="col-md-12 painting-container-img" src="' + image.src_low + '"></a><div class="col-md-12 painting-container-title">' + image.title + '</div><div class="col-md-12 painting-container-year">' + image.year + '</div></div></div>');
                
                    // from string to jquery object
                    var $newImages = $(newImages);

                    // appending new images
                    $grid.append(newImages).masonry('appended', newImages);
                }
            })

            // removing old images
            $grid.masonry('remove', $(oldImages)).masonry('layout');
              
        }

        return false;
    });

});