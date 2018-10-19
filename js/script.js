// Implementare un servizio che ritorni un JSON contenente un array di immagini con le relative proprietà, esattamente come allImages.
// allImages dichiarato sotto , staticamente , è solo un esempio.

// Esempio per collegarsi al servizio e scaricare il JSON
// allImages = $.getJSON("http://urltest.com/api/getGallery", function(data) {
//     allImages = data;
// });

$( document ).ready(function() {

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
                    "src_audio": "",
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
                    "src_audio": "audio/horse.mp3",
                    "title": "Periferia romana",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
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
                    "src_audio": "audio/horse.mp3",
                    "title": "Periferia romana",
                    "category": "#affreschi",
                    "year": "1959",
                    "description": ""
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
                    "src_low": "img/gallery/IN_73_Monica.jpg",
                    "src_high": "img/gallery/IN_73_Monica.jpg",
                    "src_audio": "audio/horse.mp3",
                    "title": "Monica",
                    "category": "#sculture",
                    "year": "1978",
                    "description": ""
                }
            ]
    };

    // rappresenta il numero di immagini presenti in gallery
    numberOfImagesShowed = 0;

    var htmlImagesGallery = "";
    $.each(allImages.images, function(i, image) {

        if(numberOfImagesShowed == allImages.numberOfimagesToShow) 
            return;

        htmlImagesGallery += '\
            <div class="col-6 col-md-4 col-lg-3 painting-container">\
                <div class="row painting-content">\
                    <div class="col-md-12 painting-container-img">\
                        <a href="' + image.src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + image.title + '</div>\
                            <div class=modal-painting-container-year>' + image.year + '</div>';

                            if (image.src_audio !== "") {
                                htmlImagesGallery += '<div class=modal-painting-container-audio><audio controls><source src=' + image.src_audio + ' type=audio/mpeg></audio></div>';
                            }
                            
                            htmlImagesGallery += '\
                            <div class=modal-painting-container-desc><p>' + image.description + '</p></div>">\
                            <img class="painting-container-img" src="' + image.src_low + '">\
                        </a>\
                    </div>\
                    <div class="col-md-12 painting-container-title">' + image.title + '</div>\
                    <div class="col-md-12 painting-container-year">' + image.year + '</div>\
                </div>\
            </div>';

        numberOfImagesShowed++;
    })

    // populate the gallery
    $( "#gallery" ).prepend( htmlImagesGallery );

    $("#gallery-page .showmore").on('click', function() {

        // active anchor
        var clickedAnchor = $('.anchor.active').attr("href");

        // tutte le immagini della categoria cliccata
        var allImagesTemp = getImagesFromCategory(clickedAnchor);

        // il numero di immagini da mostrare
        var numberOfimagesToShowOnLoadmoreTemp = allImages.numberOfimagesToShowOnLoadmore;

        for(var i = numberOfImagesShowed; i < allImagesTemp.length && numberOfimagesToShowOnLoadmoreTemp > 0; i++, numberOfimagesToShowOnLoadmoreTemp--) {
            
            var newImages = '\
                <div class="col-6 col-md-4 col-lg-3 painting-container">\
                    <div class="row painting-content">\
                        <div class="col-md-12 painting-container-img">\
                            <a href="' + allImagesTemp[i].src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + allImagesTemp[i].title + '</div>\
                                <div class=modal-painting-container-year>' + allImagesTemp[i].year + '</div>';

                                if (allImagesTemp[i].src_audio !== "") {
                                    newImages += '<div class=modal-painting-container-audio><audio controls><source src=' + allImagesTemp[i].src_audio + ' type=audio/mpeg></audio></div>';
                                }
                                
                                newImages += '\
                                <div class=modal-painting-container-desc><p>' + allImagesTemp[i].description + '</p></div>">\
                                <img class="painting-container-img" src="' + allImagesTemp[i].src_low + '">\
                            </a>\
                        </div>\
                        <div class="col-md-12 painting-container-title">' + allImagesTemp[i].title + '</div>\
                        <div class="col-md-12 painting-container-year">' + allImagesTemp[i].year + '</div>\
                    </div>\
                </div>';
            
            // appending new images
            $("#gallery .painting-container").last().after( newImages );

            // update the field
            numberOfImagesShowed++;
        }

        // if all images are showed, I can hide the button showmore
        if( numberOfImagesShowed == allImagesTemp.length ) {
            $('.showmore').hide();
        }

        return false;
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
            // var oldImages = $('.grid-item');
            var oldImages = $('#gallery .painting-container');

            // disabled all anchors link filters
            $("#gallery-page .anchors .anchor").removeClass("active");

            // set active anchor clicked
            $(this).addClass("active");

            // tutte le immagini della categoria cliccata
            var allImagesTemp = getImagesFromCategory(clickedAnchor);

            // il numero di immagini da mostrare
            var numberOfimagesToShow = allImages.numberOfimagesToShow;

            // initializing
            numberOfImagesShowed = 0;

            for(var i = 0; i < allImagesTemp.length && i < numberOfimagesToShow; i++) {

                var newImages = '\
                    <div class="col-6 col-md-4 col-lg-3 painting-container">\
                        <div class="row painting-content">\
                            <div class="col-md-12 painting-container-img">\
                                <a href="' + allImagesTemp[i].src_high + '" data-toggle="lightbox" data-gallery="example-gallery" data-footer="<div class=modal-painting-container-title>' + allImagesTemp[i].title + '</div>\
                                    <div class=modal-painting-container-year>' + allImagesTemp[i].year + '</div>';

                                    if (allImagesTemp[i].src_audio !== "") {
                                        newImages += '<div class=modal-painting-container-audio><audio controls><source src=' + allImagesTemp[i].src_audio + ' type=audio/mpeg></audio></div>';
                                    }
                                    
                                    newImages += '\
                                    <div class=modal-painting-container-desc><p>' + allImagesTemp[i].description + '</p></div>">\
                                    <img class="painting-container-img" src="' + allImagesTemp[i].src_low + '">\
                                </a>\
                            </div>\
                            <div class="col-md-12 painting-container-title">' + allImagesTemp[i].title + '</div>\
                            <div class="col-md-12 painting-container-year">' + allImagesTemp[i].year + '</div>\
                        </div>\
                    </div>';

                // appending new images
                $("#gallery .painting-container").last().after( newImages );

                // update the field
                numberOfImagesShowed++;
            }

            // removing old images
            oldImages.remove();

            // if all images are showed
            if( numberOfImagesShowed == allImagesTemp.length ) {
                $('.showmore').hide();
            }

        }

        return false;
    });

    // return an array that contains the images of category passed
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

    // lightbox configuration: http://ashleydw.github.io/lightbox/
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();

        $(this).ekkoLightbox({
            alwaysShowClose: true,
            showArrows: false
        });

    });

});