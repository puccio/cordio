$( document ).ready(function() {
    
    // Implementare api rest che ritorni un JSON contenente un array di immagini con le relative proprietà
    
    // allImages = $.getJSON("http://urltest.com/api/getGallery", function(data) {
    //     allImages = data;
    // });

    // qui lo dichiaro statico
    allImages = {
        "numberOfimagesToShow": 8,                  // definisce quante immagini mostrare al caricamento della pagina
        "numberOfimagesToShowOnLoadmore": 8,        // definisce quante immagini mostrare al loadmore
        "images":   
            [
                {
                    "src_low": "img/gallery/IN_59_Periferia-romana.jpg",
                    "src_high": "img/gallery/IN_59_Periferia-romana_high.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Periferia romana",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": "Il regalo che mi fece Giulietta Simionato per il mio matrimonio era una stampa rappresentante il Mar Mediterraneo, di un azzurro che al solo guardarlo risvegliava. Ciò che mi diede, dicendomi: “Ho scelto questo, perché la carta da parati del tuo appartamento è azzurra”, era un quadro di circa trenta centimetri per lato sul cui retro era stato annotato il titolo “Fiori a Selinunte” e in esso il mare, al centro di una grande cornice rettangolare bianca che lo circondava, esisteva come un universo interrotto. In una spiaggia che faceva percepire l'infinito, dei fiori gialli e viola che sembrava profumassero, erano illuminati dalla luce e risplendevano."
                },
                {
                    "src_low": "img/gallery/AF_94_Primavera.jpg",
                    "src_high": "img/gallery/AF_94_Primavera.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Primavera",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_high": "img/gallery/AF_94_Uccelli-nel-bosco.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Uccelli nel bosco",
                    "category": "#disegni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_high": "img/gallery/IN_63_Pesce-e-fiori.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Pesce e fioria",
                    "category": "#disegni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_high": "img/gallery/IN_67_Cielo-azzurro.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Cielo azzurro",
                    "category": "#incisioni",
                    "year": "1959",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_high": "img/gallery/IN_69_Composizione-verde-Somlia.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Composizione verde Somlia",
                    "category": "#incisioni",
                    "year": "1985",
                    "description": ""
                },
                {
                    "src_low": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_high": "img/gallery/IN_77_La-casa-del-poeta.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "La casa del poeta",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
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
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
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
                ,
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
                ,
                {
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
                ,
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
                ,
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

    // il numero di immagini corrente in gallery
    numberOfImagesShowed = 0;

    var htmlImagesGallery = "";
    $.each(allImages.images, function(i, image) {

        if(numberOfImagesShowed == allImages.numberOfimagesToShow) 
            return;

        htmlImagesGallery += '<div class="grid-item painting-container"><div class="row"><a href="' + image.src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + image.title + '</div><div class=modal-painting-container-year>' + image.year + '</div><div class=modal-painting-container-audio><audio controls><source src=' + image.src_audio + ' type=audio/mpeg>Your browser does not support the audio element.</audio></div><div class=modal-painting-container-desc>' + image.description + '</div>"><img class="col-md-12 painting-container-img" src="' + image.src_low + '"></a><div class="col-md-12 painting-container-title">' + image.title + '</div><div class="col-md-12 painting-container-year">' + image.year + '</div></div></div>';
        numberOfImagesShowed++;
    })


    // versione con soundcloud
    //         htmlImagesGallery += '<div class="grid-item painting-container"><div class="row"><a href="' + image.src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + image.title + '</div><div class=modal-painting-container-year>' + image.year + '</div><div class=modal-painting-container-audio><iframe width=100% scrolling=no frameborder=no src=https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/476030742&color=%23ff5500&auto_play=true></iframe></div><div class=modal-painting-container-desc>' + image.description + '</div>"><img class="col-md-12 painting-container-img" src="' + image.src_low + '"></a><div class="col-md-12 painting-container-title">' + image.title + '</div><div class="col-md-12 painting-container-year">' + image.year + '</div></div></div>';


    // populate the gallery
    $( ".grid" ).append( htmlImagesGallery );

    // init Masonry gallery
    $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
            itemSelector: '.grid-item',
            gutter: '.gutter-sizer'
            // columnWidth: 25%,
            // gutter: 20
        });
    });

    $("#gallery-page .showmore").on('click', function() {

        // active anchor
        var clickedAnchor = $('.anchor.active').attr("href");

        //var allImagesTemp = allImages.images;
        var allImagesTemp = getImagesFromCategory(clickedAnchor);
        var numberOfimagesToShowOnLoadmoreTemp = allImages.numberOfimagesToShowOnLoadmore;

        for(var i = numberOfImagesShowed; i < allImagesTemp.length && numberOfimagesToShowOnLoadmoreTemp > 0; i++, numberOfimagesToShowOnLoadmoreTemp--) {
            
            var newImages = $('<div class="grid-item painting-container"><div class="row"><a href="' + allImagesTemp[i].src_high + '" data-toggle="lightbox" data-gallery="example-gallery"><img class="col-md-12 painting-container-img" src="' + allImagesTemp[i].src_low + '"></a><div class="col-md-12 painting-container-title">' + allImagesTemp[i].title + '</div><div class="col-md-12 painting-container-year">' + allImagesTemp[i].year + '</div></div></div>');
        
            // from string to jquery object
            var $newImages = $(newImages);

            // appending new images
            $grid.append(newImages).masonry('appended', newImages);

            // update the field
            numberOfImagesShowed++;
        }

        // if all images are showed
        if( numberOfImagesShowed == allImagesTemp.length ) {
            $('.showmore').hide();
        }

        return false;
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();

        $(this).ekkoLightbox({
            alwaysShowClose: true,
            showArrows: false
        });

    });

    $("#gallery-page .anchors .anchor").click(function() {

        // clicked anchor
        var clickedAnchor = $(this).attr("href");

        // clicked anchor
        var activeAnchor = $("#gallery-page .anchors .anchor.active").attr("href");

        // if anchor clicked is different to the current
        if(activeAnchor !== clickedAnchor) {

            // show showmore button
            $('.showmore').show();

            // all images of the gallery
            var oldImages = $('.grid-item');

            // disabled all anchors link filters
            $("#gallery-page .anchors .anchor").removeClass("active");

            // set active anchor clicked
            $(this).addClass("active");

            // tutte le immagini della categoria cliccata
            var allImagesTemp = getImagesFromCategory(clickedAnchor);

            var numberOfimagesToShow = allImages.numberOfimagesToShow;

            numberOfImagesShowed = 0;

            for(var i = 0; i < allImagesTemp.length && i < numberOfimagesToShow; i++) {

                var newImages = $('<div class="grid-item painting-container"><div class="row"><a href="' + allImagesTemp[i].src_high + '" data-toggle="lightbox" data-gallery="example-gallery"><img class="col-md-12 painting-container-img" src="' + allImagesTemp[i].src_low + '"></a><div class="col-md-12 painting-container-title">' + allImagesTemp[i].title + '</div><div class="col-md-12 painting-container-year">' + allImagesTemp[i].year + '</div></div></div>');
            
                // from string to jquery object
                var $newImages = $(newImages);

                // appending new images
                $grid.append(newImages).masonry('appended', newImages);

                // update the field
                numberOfImagesShowed++;
            }

            // removing old images
            $grid.masonry('remove', $(oldImages)).masonry('layout');

            // if all images are showed
            if( numberOfImagesShowed == allImagesTemp.length ) {
                $('.showmore').hide();
            }

        }

        return false;
    });

    function getImagesFromCategory(clickedAnchor) {
        var allImagesFromCategory = [];

        for(var i = 0; i < allImages.images.length; i++) {
            if( clickedAnchor === "#all" ) {
                allImagesFromCategory = allImages.images;
                break;
            } else if (allImages.images[i].category === clickedAnchor) {
                allImagesFromCategory.push(allImages.images[i]);
            }
        }

        return allImagesFromCategory;
    }

});