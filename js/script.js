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
        var activeAnchor = $(this).attr("href");

        // clicked anchor
        var clickedAnchor = $("#gallery-page .anchors .anchor.active").attr("href");

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
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    },
                                    {
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    },
                                    {
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    },
                                    {
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    },
                                    {
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    },
                                    {
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    },
                                    {
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    }
                                    ,
                                    {
                                        "src": "img/gallery/IN_59_Periferia-romana.jpg",
                                        "title": "Periferia romana",
                                        "category": "affreschi",
                                        "year": "1959"
                                    }
                                ]
                        };

            $.each(allImages.images, function(i, image) {
                var newImages = $('<div class="grid-item painting-container" name="#affreschi"><div class="row"><a href="' + image.src + '" data-toggle="lightbox" data-gallery="example-gallery"><img class="col-md-12 painting-container-img" src="' + image.src + '"></a><div class="col-md-12 painting-container-title">' + image.title + '</div><div class="col-md-12 painting-container-year">' + image.year + '</div></div></div>');
            
                // from string to jquery object
                var $newImages = $(newImages);

                // appending new images
                $grid.append(newImages).masonry('appended', newImages);
            })

            // removing old images
            $grid.masonry('remove', $(oldImages)).masonry('layout');
              
        }

        return false;
    });

});